# Slothy.io

A web app inspired by Slack, Discord and Trello which features chat, task management and social groups.

[![Build Status](https://travis-ci.org/Wahuh/slothy.io.svg?branch=development)](https://travis-ci.org/Wahuh/slothy.io)

## Features

## Getting Started

### Prerequisites

* Ubuntu 18.04
* Docker: https://docs.docker.com/install/linux/docker-ce/ubuntu/
* Docker Compose: https://docs.docker.com/compose/install/
* Optional setup without sudo after installing Docker & Docker Compose: https://docs.docker.com/install/linux/linux-postinstall/

### Installation


### Environment Variables

In the server folder, create two files: `.dev.env` and `.test.env`. They will both look the same except for `POSTGRES_DB`, `POSTGRES_PORT` and `POSTGRES HOST` because there are separate server and database services for development and testing.

```
POSTGRES_PASSWORD=postgres_password
POSTGRES_DB=name_of_the_database_created_by_default
POSTGRES_HOST=name_of_the_database_service
POSTGRES_PORT=5432
POSTGRES_USER=postgres
JWT_SECRET=super_secret_key_for_jwt_auth
```


## Running tests

```
docker-compose up
docker exec -it server_test npm run test
#use this regularly
docker system prune
```

The container_name specified in the docker-compose file can replace the id.
