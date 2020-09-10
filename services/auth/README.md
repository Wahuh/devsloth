# Auth Service

This service handles logins, signups and user accounts.

## Getting Started

###  Setting up a test database

> sqlx needs access to a database with the application schema at compile time (outside of docker-compose)

```sh
docker run -e POSTGRES_DB=auth -e POSTGRES_PASSWORD=postgres --name auth_db_test -p 8084:5432 -d postgres 
```

### Configuring sqlx

Create a .env file so sqlx can connect to the test database

```sh
# services/auth/.env

DATABASE_URL=postgresql://postgres:postgres@localhost:8084/auth
```

Keep `sqlx-data.json` up to date by running `cargo sqlx prepare`. If this command fails to update, try deleting files in `target/sqlx`.


### Running migrations

> make sure you are in the services/auth directory
```sh
docker-compose -f docker-compose.migrate.yml up --exit-code-from migrations
```

> below is an alternative to running the docker-compose command, using volume doesn't work on Windows yet see: https://github.com/docker/cli/pull/1273

```sh
docker run --rm -v $(PWD)/migrations:/flyway/sql flyway/flyway -url=jdbc:postgresql://host.docker.internal:8084/auth -schemas=public -user=postgres -password=postgres -connectRetries=60 migrate
```

### Running Tests

```sh
docker-compose -f docker-compose.test.yml up --exit-code-from auth_tests
```