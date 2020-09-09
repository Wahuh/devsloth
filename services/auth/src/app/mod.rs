mod handlers;
mod routes;

use crate::config::Config;
use anyhow::{Context, Result};
use routes::add_routes;
use sqlx::{postgres::PgPoolOptions, Pool, Postgres};
use std::env;
use tide::Server;

#[derive(Clone)]
pub struct State {
    config: Config,
    pool: Pool<Postgres>,
}

fn setup_app(state: State) -> Server<State> {
    let mut app = Server::with_state(state);
    app = add_routes(app);
    app
}

pub async fn run() -> Result<()> {
    tide::log::start();
    let config = Config::from_env()?;
    let database_url =
        env::var("DATABASE_URL").context("DATABASE_URL environment variable not set")?;
    let pool = PgPoolOptions::new().connect(&database_url).await?;
    let state = State { config, pool };
    let app = setup_app(state);
    app.listen("0.0.0.0:8080").await?;
    Ok(())
}

#[cfg(test)]
mod tests {}
