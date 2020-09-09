mod app;
mod authn;
mod config;
mod models;

#[async_std::main]
async fn main() -> anyhow::Result<()> {
    app::run().await
}
