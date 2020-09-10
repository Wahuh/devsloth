mod account;
mod app;
mod authz;
mod config;
mod github;
mod models;

use dotenv::dotenv;

#[async_std::main]
async fn main() -> anyhow::Result<()> {
    // dotenv().ok();
    app::run().await
}
