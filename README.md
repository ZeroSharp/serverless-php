## PHP with the Serverless Framework
In order to use PHP on AWS Lambda you need to bundle the PHP binary, including the required libraries, into the package. This serverless example project includes the necessary binary to run a simple PHP script.

See my blog post [here](http://blog.zerosharp.com/the-serverless-framework-and-php/).

### Prerequisites
- [serverless](https://serverless.com/)
- [node](https://nodejs.org)

###

Install this serverless project. It will create a new serverless-php folder.
```shell
serverless install --url https://github.com/ZeroSharp/serverless-php
```

### Deploying the sample function to AWS

Check the `serverless.yml` file and modify region and stage if necessary.
```shell
sls deploy
```

### Running the function locally

```shell
sls invoke local --function hello
```

### Running the function on AWS

```shell
sls invoke --function hello
```

## Rebuilding the PHP binary

If you need different compiler flags or dependencies you will need to recompile PHP.

### Prerequisites
- [docker](https://www.docker.com/)

### Compile the static standalone PHP 7 binary
To do this, we have to compile the PHP 7.2.2 with statically linked libraries:

```shell
sh buildphp.sh
```

### PHP Version
The default is to use the PHP 7.2.2 branch to compile the PHP binary.
To switch the PHP version you can set the branch PHP_VERSION_GIT_BRANCH parameter in `buildphp.sh` line 8.

## Thanks ##

Thanks to:
- [Danny Linden](https://github.com/dannylinden/aws-lambda-php) who worked out most of the hard stuff here.
- [Robert Anderson](https://github.com/ZeroSharp) who provided the original GitHub repo.
- [Stolz](https://github.com/Stolz) for the binaries update.
