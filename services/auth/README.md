# Auth Service

This service handles logins, signups and user accounts.

## Getting Started

###  Setting up a test database

To get intellisense for sqlx macros, it needs access to a database with the application schema at compile time (outside of docker-compose)

```sh
docker run -e POSTGRES_DB=auth -e POSTGRES_PASSWORD=postgres --name auth_db_test -p 8084:5432 -d postgres 
```

Keep `sqlx-data.json` up to date by running `cargo sqlx prepare`. If this command fails to update the file, delete files in `target/sqlx` and try again.

### Environment variables for development

Create a `.env` file

```sh
# services/auth/.env

# sqlx uses this url for intellisense
DATABASE_URL=postgresql://postgres:postgres@localhost:8084/auth

GITHUB_CLIENT_ID=github_dev_oauth_app_id
GITHUB_CLIENT_SECRET=github_dev_oauth_app_id
```

### Running Tests

Make sure you have a test database container running on host port `8084`.

```sh
docker-compose -f docker-compose.test.yml up --exit-code-from auth_tests
```