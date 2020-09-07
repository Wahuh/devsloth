use anyhow::{Context, Result};
use std::env;

#[derive(Clone, Debug)]
pub struct GitHubConfig {
    api_url: String,
    base_url: String,
    client_id: String,
}

impl GitHubConfig {
    pub fn from_env() -> Result<GitHubConfig> {
        let base_url =
            env::var("GITHUB_BASE_URL").context("GITHUB_BASE_URL environment variable not set")?;
        let api_url =
            env::var("GITHUB_API_URL").context("GITHUB_API_URL environment variable not set")?;
        let client_id = env::var("GITHUB_CLIENT_ID")
            .context("GITHUB_CLIENT_ID environment variable not set")?;
        let config = GitHubConfig {
            base_url,
            api_url,
            client_id,
        };
        Ok(config)
    }
}

pub struct GitHubClient<'a> {
    config: &'a GitHubConfig,
}

impl GitHubClient<'_> {
    pub fn new(config: &GitHubConfig) -> GitHubClient {
        GitHubClient { config }
    }

    pub fn generate_redirect_url<S>(&self, state: S) -> String
    where
        S: Into<String>,
    {
        let identity_url = format!(
            "{}/login/oauth/authorize?client_id={}&state={}",
            self.config.base_url,
            self.config.client_id,
            state.into()
        );
        identity_url
    }
}

#[cfg(test)]
mod tests {
    use super::{GitHubClient, GitHubConfig};
    use serial_test::serial;
    use std::env;

    fn clean_env_variables() {
        env::remove_var("GITHUB_API_URL");
        env::remove_var("GITHUB_BASE_URL");
        env::remove_var("GITHUB_CLIENT_ID");
    }

    #[test]
    #[serial]
    fn from_env_loads_env_variables() {
        clean_env_variables();
        env::set_var("GITHUB_API_URL", "https://api.github.com");
        env::set_var("GITHUB_BASE_URL", "https://github.com");
        env::set_var("GITHUB_CLIENT_ID", "abcdef123456");

        let config = GitHubConfig::from_env().unwrap();

        assert_eq!(config.api_url, "https://api.github.com");
        assert_eq!(config.base_url, "https://github.com");
        assert_eq!(config.client_id, "abcdef123456");
    }

    #[test]
    #[serial]
    fn from_env_missing_base_url_returns_error() {
        clean_env_variables();
        env::set_var("GITHUB_API_URL", "https://api.github.com");
        env::set_var("GITHUB_CLIENT_ID", "abcdef123456");

        let err = GitHubConfig::from_env().unwrap_err();

        assert_eq!(
            err.to_string(),
            "GITHUB_BASE_URL environment variable not set"
        );
    }

    #[test]
    #[serial]
    fn from_env_missing_api_url_returns_error() {
        clean_env_variables();
        env::set_var("GITHUB_BASE_URL", "https://github.com");
        env::set_var("GITHUB_CLIENT_ID", "abcdef123456");

        let err = GitHubConfig::from_env().unwrap_err();

        assert_eq!(
            err.to_string(),
            "GITHUB_API_URL environment variable not set"
        );
    }

    #[test]
    #[serial]
    fn from_env_missing_client_id_returns_error() {
        clean_env_variables();
        env::set_var("GITHUB_API_URL", "https://api.github.com");
        env::set_var("GITHUB_BASE_URL", "https://github.com");

        let err = GitHubConfig::from_env().unwrap_err();

        assert_eq!(
            err.to_string(),
            "GITHUB_CLIENT_ID environment variable not set"
        );
    }

    #[test]
    fn generate_redirect_url_returns_identity_url_with_state() {
        let config = GitHubConfig {
            api_url: "".to_string(),
            base_url: "https://github.com".to_string(),
            client_id: "id456789".to_string(),
        };

        let client = GitHubClient::new(&config);
        let state = "abc123";
        let redirect_url = client.generate_redirect_url(state);
        assert_eq!(
            redirect_url,
            "https://github.com/login/oauth/authorize?client_id=id456789&state=abc123"
        );
    }
}
