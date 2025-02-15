# Configure AWS Provider
provider "aws" {
  region = var.aws_region
}

# Create S3 bucket
resource "aws_s3_bucket" "hire_me_bucket" {
  bucket = var.bucket_name

  lifecycle {
    ignore_changes  = all  # Ignore all changes after creation
    prevent_destroy = true # Optional: prevents accidental deletion
  }

  # Handle bucket already exists error
  count = try(
    aws_s3_bucket.hire_me_bucket.bucket,
    0
  ) == 0 ? 1 : 0
}

# Enable website hosting
resource "aws_s3_bucket_website_configuration" "hire_me" {
  bucket = aws_s3_bucket.hire_me_bucket.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "index.html"
  }
}

# Configure bucket policy for public access
resource "aws_s3_bucket_policy" "hire_me" {
  bucket = aws_s3_bucket.hire_me_bucket.id

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
        Resource = "${aws_s3_bucket.hire_me_bucket.arn}/*"
      },
    ]
  })
}

# Enable static website hosting
resource "aws_s3_bucket_public_access_block" "hire_me" {
  bucket = aws_s3_bucket.hire_me_bucket.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

# Output the website URL
output "website_url" {
  value = "http://${aws_s3_bucket_website_configuration.hire_me.website_endpoint}"
}
