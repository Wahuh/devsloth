mod app;
mod authz;
mod challenge;
mod config;
mod github;

#[async_std::main]
async fn main() -> anyhow::Result<()> {
    app::run().await
}
