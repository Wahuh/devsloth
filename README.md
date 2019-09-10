## Running tests

```
docker-compose up
docker exec -it server_tests npm run test
#use this regularly
docker system prune
```

The container_name specified in the docker-compose file can replace the id.
