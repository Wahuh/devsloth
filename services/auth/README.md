# Auth Service

This service handles logins, signups and user accounts.

## Getting Started

### Running Tests

Make sure you have a test database container running on host port `8084`.

```sh
docker-compose -f docker-compose.test.yml up --exit-code-from auth_tests
```