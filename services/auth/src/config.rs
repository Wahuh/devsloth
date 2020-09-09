use anyhow::Result;
use std::env;

#[derive(Clone)]
pub struct Config {
    access_secret: String,
    refresh_secret: String,
    github_api_url: String,
    github_base_url: String,
    github_client_id: String,
    github_client_secret: String,
    web_domain: String,
    web_url: String,
}

impl Config {
    pub fn from_env() -> Result<Config> {
        let config = Config {
            access_secret: env::var("ACCESS_SECRET")?,
            refresh_secret: env::var("REFRESH_SECRET")?,
            github_api_url: env::var("GITHUB_API_URL")?,
            github_base_url: env::var("GITHUB_BASE_URL")?,
            github_client_id: env::var("GITHUB_CLIENT_ID")?,
            github_client_secret: env::var("GITHUB_CLIENT_SECRET")?,
            web_domain: env::var("WEB_DOMAIN")?,
            web_url: env::var("WEB_URL")?,
        };
        Ok(config)
    }
}
