Documentation
====================

## Installation instructions

Please follow the documentation below to install sandbox.

### Using sandbox on host machine

1. Install sandbox, see [instructions](https://github.com/getsandbox/sandbox).
2. Start sandbox on port `8002`:
	```bash
	sandbox run --port="8002"
	```

### Using sandbox within docker

1. Build the image:
	```bash
	docker build -t find-exporters-sandbox .
	```
2. Start sandbox server on port `8002`:
	```bash
	docker run -it -p 8002:8002 find-exporters-sandbox
	```
	
	Stop the server by pressing `CTRL`+`C`

### Creating Docker container for CircleCI

Docker image will be automatically rebuilt on each push.

However, you can still do this manually.
 
```bash
docker login # Ask webops for Docker Hub access to the ukti group.
docker build -f Dockerfile -t find-exporters-sandbox .

docker tag find-exporters-sandbox:latest ukti/find-exporters-sandbox:latest

docker push ukti/find-exporters-sandbox:latest
```

You image should be now listed at [Docker Hub](https://cloud.docker.com/u/ukti/repository/docker/ukti/find-exporters-sandbox/tags).
