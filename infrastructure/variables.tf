variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "eu-west-1"
}

variable "bucket_name" {
  description = "Hire me bucket"
  type        = string
  default     = "solifas-hire-me"
}

variable "environment" {
  description = "Environment (dev, staging, prod)"
  type        = string
  default     = "dev"
}
