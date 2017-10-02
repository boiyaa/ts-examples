# Mock API Gateway

## requirements

### Install aws-cli and terraform

### Install dependencies

```sh
$ cd path/to/swagger-api-gateway-mock
$ npm install
```

### `aws configure` or environment variables

```sh
$ export AWS_ACCESS_KEY_ID=your access key
$ export AWS_SECRET_ACCESS_KEY=your secret key
$ export AWS_DEFAULT_REGION=your region
```

## Show the execution plan to AWS

```sh
$ npm run plan
```

## Create/Update mock API Gateway on AWS

```sh
$ npm run apply
```

## Deploy API

```sh
$ npm run deploy
```

## API testing

```sh
$ npm run test
```
