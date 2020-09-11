use crate::config::Config;

pub struct GitHubClient<'a> {
    api_url: &'a String,
    base_url: &'a String,
    client_id: &'a String,
    client_secret: &'a String,
    access_token: Option<String>,
}

impl GitHubClient<'_> {
    pub fn new(config: &Config) -> GitHubClient {
        GitHubClient {
            access_token: None,
            api_url: &config.github_api_url,
            base_url: &config.github_base_url,
            client_id: &config.github_client_id,
            client_secret: &config.github_client_secret,
        }
    }

    pub fn build_redirect_url<S>(&self, state: S) -> String
    where
        S: Into<String>,
    {
        let identity_url = format!(
            "{}/login/oauth/authorize?client_id={}&state={}",
            self.base_url,
            self.client_id,
            state.into()
        );
        identity_url
    }
}
