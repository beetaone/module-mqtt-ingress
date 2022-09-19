SHELL := /bin/bash

MODULE=weevenetwork/mqtt-ingress
VERSION_NAME=v1.0.1

create_image:
	docker build -t ${MODULE}:${VERSION_NAME} . -f image/Dockerfile
.phony: create_image

create_and_push_multi_platform:
	docker buildx build --platform linux/amd64,linux/arm,linux/arm64 -t ${MODULE}:${VERSION_NAME} --push . -f image/Dockerfile
.phony: create_and_push_multi_platform

push_latest:
	docker image push ${MODULE}:${VERSION_NAME}
.phony: push_latest

run_image:
	docker run -p 5000:80 --rm --env-file=./config.env ${MODULE}:${VERSION_NAME}
.phony: run_image

install_local:
	npm install
.phony: install_local

run_local:
	npm run start
.phony: run_local
