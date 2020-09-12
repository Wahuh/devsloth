FROM ekidd/rust-musl-builder:latest as build

COPY --chown=rust:rust Cargo.toml Cargo.lock ./
RUN cargo build --release || true

COPY --chown=rust:rust . ./
RUN cargo build --release

FROM scratch

# override this for prod
ENV ACCESS_SECRET=access_banana
# override this for prod
ENV REFRESH_SECRET=refresh_banana
# this is the local dev db url - override this for ci tests or prod
ENV DATABASE_URL=postgresql://postgres:postgres@host.docker.internal:8084/auth
# override this for tests
ENV GITHUB_API_URL=https://api.github.com
# override this for tests
ENV GITHUB_BASE_URL=https://github.com
# this is a client id returned by the fake test server - override this for dev or prod
ENV GITHUB_CLIENT_ID=banana_id
# this is a client secret returned by the fake test server - override this for dev or prod
ENV GITHUB_CLIENT_SECRET=banana_secret
# set to 0 for dev
ENV SECURE_COOKIES=1
# no need to override
ENV PORT=8080
# override this for dev & test
ENV WEB_DOMAIN=devtruck.com
# override this for dev & test
ENV WEB_URL=https://devtruck.com

COPY --from=build \
    /home/rust/src/target/x86_64-unknown-linux-musl/release/auth .
EXPOSE ${PORT}
CMD ["./auth"]