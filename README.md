# Slothy.io

A web app inspired by Slack, Discord and Trello which features chat, task management and social groups.

## Features

## Getting Started

### Prerequisites

* Ubuntu 18.04
* Docker: https://docs.docker.com/install/linux/docker-ce/ubuntu/
* Docker Compose: https://docs.docker.com/compose/install/
* Optional setup without sudo after installing Docker & Docker Compose: https://docs.docker.com/install/linux/linux-postinstall/

### Installation


### Environment Variables

In the server folder, create two files: `.dev.env` and `.test.env`. They will both look the same except for `POSTGRES_DB` and `POSTGRES_PORT`.

```
POSTGRES_PASSWORD=postgres_password
POSTGRES_DB=your_dev_or_test_database_name
POSTGRES_HOST=postgres
POSTGRES_PORT=5432
POSTGRES_USER=postgres
```


## Running tests

```
docker-compose up
docker exec -it server_tests npm run test
#use this regularly
docker system prune
```

The container_name specified in the docker-compose file can replace the id.
