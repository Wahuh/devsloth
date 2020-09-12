mod handlers;
mod routes;

use crate::config::Config;
use anyhow::{Context, Result};
use routes::add_routes;
use sqlx::{postgres::PgPoolOptions, PgPool};
use std::env;
use tide::Server;

#[derive(Clone)]
pub struct State {
    config: Config,
    pool: PgPool,
}

fn setup_app(state: State) -> Server<State> {
    let mut app = Server::with_state(state);
    app = add_routes(app);
    app
}

pub async fn run() -> Result<()> {
    tide::log::start();
    let config = Config::from_env()?;
    let port = env::var("PORT").context("PORT environment variable not set")?;
    let port_number = port
        .parse::<i32>()
        .with_context(|| format!("{} is not a valid port number", port))?;
    let database_url =
        env::var("DATABASE_URL").context("DATABASE_URL environment variable not set")?;

    let pool = PgPoolOptions::new().connect(&database_url).await?;
    let state = State { config, pool };
    let app = setup_app(state);
    app.listen(format!("0.0.0.0:{}", port_number)).await?;
    Ok(())
}
