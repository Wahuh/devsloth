mod handlers;
mod routes;

use crate::authn::GitHubConfig;
use anyhow::Result;
use routes::add_routes;
use sqlx::{postgres::PgPoolOptions, Pool, Postgres};
use std::env;
use tide::Server;

#[derive(Clone)]
pub struct State {
    github: GitHubConfig,
    pool: Pool<Postgres>,
}

impl State {}

fn setup_app(pool: Pool<Postgres>) -> Result<Server<State>> {
    let state = State {
        github: GitHubConfig::from_env()?,
        pool,
    };
    let mut app = Server::with_state(state);
    app = add_routes(app);
    Ok(app)
}

pub async fn run() -> Result<()> {
    tide::log::start();
    let database_url = env::var("DATABASE_URL")?;
    let pool = PgPoolOptions::new().connect(&database_url).await?;
    let app = setup_app(pool)?;
    app.listen("0.0.0.0:8080").await?;
    Ok(())
}

#[cfg(test)]
mod tests {}
