# Auth Service

This service handles logins, signups and user accounts.

## Getting Started

###  Setting up a test database

> sqlx needs access to a database with the application schema at compile time (outside of docker-compose)

```sh
docker run -e POSTGRES_DB=auth -e POSTGRES_PASSWORD=postgres --name auth_db_test -p 8084:5432 -d postgres 
```

> create a .env file so sqlx can connect to the test database

```sh
# services/auth/.env

DATABASE_URL=postgres://postgres:postgres@localhost:8084/auth
```

### Running migrations

> make sure you are in the services/auth directory
```
docker-compose -f docker-compose.migrate.yml up --exit-code-from migrations
```

> below is an alternative to running the docker-compose command, using volume doesn't work on Windows yet see: https://github.com/docker/cli/pull/1273

```
docker run --rm -v $(PWD)/migrations:/flyway/sql flyway/flyway -url=jdbc:postgresql://host.docker.internal:8084/auth -schemas=public -user=postgres -password=postgres -connectRetries=60 migrate
```

### Running Tests

```sh
docker-compose -f docker-compose.test.yml up --exit-code-from auth_tests
```