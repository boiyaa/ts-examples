output "rest_api_id" {
  value = "${aws_cloudformation_stack.api_gateway.outputs["Api"]}"
}

output "invoke_url" {
  value = "https://${aws_cloudformation_stack.api_gateway.outputs["Api"]}.execute-api.${data.aws_region.current.name}.amazonaws.com"
}

output "execution_arn" {
  value = "arn:aws:execute-api:${data.aws_region.current.name}:${data.aws_caller_identity.current.account_id}:${aws_cloudformation_stack.api_gateway.outputs["Api"]}"
}
