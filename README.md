## PHP with the Serverless Framework
In order to use PHP on AWS Lambda, the PHP binary, including the required libraries, has to be integrated into the app.

### Prerequisites
- [serverless](https://serverless.com/)
- [node](https://nodejs.org)

### Deploying the sample function to AWS

Check the `serverless.yml` file and modify region and stage if necessary.
```
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

If you need different compiler flags or depndencies you will need to recompile PHP.

### Prerequisites
- [docker](https://www.docker.com/)

### Compile the static standalone PHP 7 binary
To do this, we have to compile the PHP 7.1.0RC6 with statically linked libraries:

```shell
sh buildphp.sh
```

### PHP Version
The default is to use the PHP 7.1.0RC6 branch to compile the PHP binary.
To switch the PHP version you can set the branch PHP_VERSION_GIT_BRANCH parameter in `buildphp.sh` line 8.
