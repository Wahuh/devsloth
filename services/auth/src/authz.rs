use anyhow::Result;
use sqlx::PgPool;

use crate::{account::Account, config::Config, github::GitHubClient};

pub struct AuthorizationResult {
    pub access_token: String,
    pub refresh_token: String,
}

pub async fn continue_with_github(
    config: &Config,
    pool: &PgPool,
    code: String,
    state: String,
) -> Result<AuthorizationResult> {
    let mut client = GitHubClient::new(config);
    client.authorize(code, state).await?;
    let email = client.get_user_email().await?;
    let account = Account::find(pool, &email).await?;
    if let Some(account) = account {
        let access_token = account.generate_access_token(&config.access_secret)?;
        let refresh_token = account
            .generate_refresh_token(pool, &config.refresh_secret)
            .await?;
        let result = AuthorizationResult {
            access_token,
            refresh_token,
        };
        Ok(result)
    } else {
        let new_account = Account::create(pool, &email).await?;
        let access_token = new_account.generate_access_token(&config.access_secret)?;
        let refresh_token = new_account
            .generate_refresh_token(pool, &config.refresh_secret)
            .await?;
        let result = AuthorizationResult {
            access_token,
            refresh_token,
        };
        Ok(result)
    }
}
