use anyhow::Result;
use sqlx::PgPool;

use crate::{challenge::Challenge, config::Config, github::GitHubClient};

pub async fn generate_redirect_url(config: &Config, pool: &PgPool) -> Result<String> {
    let client = GitHubClient::new(config);
    let state = Challenge::create_state(pool).await?;
    let url = client.build_redirect_url(state);
    Ok(url)
}
