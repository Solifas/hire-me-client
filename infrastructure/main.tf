# Configure AWS Provider
provider "aws" {
  region = var.aws_region
}

# First check if bucket exists
data "aws_s3_bucket" "existing_bucket" {
  bucket = var.bucket_name
  count  = try(data.aws_s3_bucket.existing_bucket[0].id, "") != "" ? 0 : 1
}

locals {
  bucket_id  = try(data.aws_s3_bucket.existing_bucket[0].id, aws_s3_bucket.hire_me_bucket.id)
  bucket_arn = try(data.aws_s3_bucket.existing_bucket[0].arn, aws_s3_bucket.hire_me_bucket.arn)
}

# Create S3 bucket
resource "aws_s3_bucket" "hire_me_bucket" {
  bucket = var.bucket_name
  count  = try(data.aws_s3_bucket.existing_bucket[0].id, "") != "" ? 0 : 1

  lifecycle {
    prevent_destroy = true
    ignore_changes = [
      tags,
    ]
  }
}

# Enable website hosting
resource "aws_s3_bucket_website_configuration" "hire_me" {
  bucket = local.bucket_id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "index.html"
  }
}

# Configure bucket policy for public access
resource "aws_s3_bucket_policy" "hire_me" {
  bucket = local.bucket_id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid    = "PublicReadGetObject"
        Effect = "Allow"
        Principal = {
          AWS = "*"
        }
        Action   = "s3:GetObject"
        Resource = "${local.bucket_arn}/*"
      },
    ]
  })
}

# Enable static website hosting
resource "aws_s3_bucket_public_access_block" "hire_me" {
  bucket = local.bucket_id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

# Output the website URL
output "website_url" {
  value = "http://${aws_s3_bucket_website_configuration.hire_me.website_endpoint}"
}
