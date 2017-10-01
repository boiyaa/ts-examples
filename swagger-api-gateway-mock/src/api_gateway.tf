# Get Swagger
data "template_file" "swagger" {
  template = "${file("swagger.json")}"

  vars {
    project = "${var.project}"
  }
}

# Create stack for API Gateway
resource "aws_cloudformation_stack" "api_gateway" {
  name = "${var.project}-stack-api-gateway"

  template_body = <<STACK
{
  "Resources": {
    "Api": {
      "Type": "AWS::ApiGateway::RestApi",
      "Properties": {
        "Name": "${var.project}",
        "Description": "A mock API example",
        "Body": ${data.template_file.swagger.rendered}
      }
    }
  },
  "Outputs": {
    "Api": {
      "Value": { "Ref": "Api" }
    }
  }
}
STACK
}
