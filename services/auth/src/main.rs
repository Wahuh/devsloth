mod app;
mod authn;
mod models;

#[async_std::main]
async fn main() -> anyhow::Result<()> {
    app::run().await
}
