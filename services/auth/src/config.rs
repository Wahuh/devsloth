use anyhow::{Context, Result};
use std::env;

#[derive(Clone)]
pub struct Config {
    pub access_secret: String,
    pub refresh_secret: String,
    pub github_api_url: String,
    pub github_base_url: String,
    pub github_client_id: String,
    pub github_client_secret: String,
    pub web_domain: String,
    pub web_url: String,
}

impl Config {
    pub fn from_env() -> Result<Config> {
        const ACCESS_SECRET: &str = "ACCESS_SECRET";
        const REFRESH_SECRET: &str = "REFRESH_SECRET";
        const GITHUB_API_URL: &str = "GITHUB_API_URL";
        const GITHUB_BASE_URL: &str = "GITHUB_BASE_URL";
        const GITHUB_CLIENT_ID: &str = "GITHUB_CLIENT_ID";
        const GITHUB_CLIENT_SECRET: &str = "GITHUB_CLIENT_SECRET";
        const WEB_DOMAIN: &str = "WEB_DOMAIN";
        const WEB_URL: &str = "WEB_URL";

        const MESSAGE: &str = "environment variable not set";

        let config = Config {
            access_secret: env::var(ACCESS_SECRET)
                .with_context(|| format!("{} {}", ACCESS_SECRET, MESSAGE))?,
            refresh_secret: env::var(REFRESH_SECRET)
                .with_context(|| format!("{} {}", REFRESH_SECRET, MESSAGE))?,
            github_api_url: env::var(GITHUB_API_URL)
                .with_context(|| format!("{} {}", GITHUB_API_URL, MESSAGE))?,
            github_base_url: env::var(GITHUB_BASE_URL)
                .with_context(|| format!("{} {}", GITHUB_BASE_URL, MESSAGE))?,
            github_client_id: env::var(GITHUB_CLIENT_ID)
                .with_context(|| format!("{} {}", GITHUB_CLIENT_ID, MESSAGE))?,
            github_client_secret: env::var(GITHUB_CLIENT_SECRET)
                .with_context(|| format!("{} {}", GITHUB_CLIENT_SECRET, MESSAGE))?,
            web_domain: env::var(WEB_DOMAIN)
                .with_context(|| format!("{} {}", WEB_DOMAIN, MESSAGE))?,
            web_url: env::var(WEB_URL).with_context(|| format!("{} {}", WEB_URL, MESSAGE))?,
        };
        Ok(config)
    }
}
