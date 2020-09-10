mod app;
mod config;

#[async_std::main]
async fn main() -> anyhow::Result<()> {
    app::run().await
}
