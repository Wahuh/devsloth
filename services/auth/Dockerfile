FROM ekidd/rust-musl-builder:latest as build

ADD --chown=rust:rust . ./
RUN cargo build --release

FROM scratch
COPY --from=build \
    /home/rust/src/target/x86_64-unknown-linux-musl/release/auth .
EXPOSE 8080
CMD ["./auth"]