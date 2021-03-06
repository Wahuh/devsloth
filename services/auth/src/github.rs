use crate::config::Config;
use anyhow::{Context, Result};
use serde::{Deserialize, Serialize};
use serde_json::json;

#[derive(Deserialize, Serialize)]
struct AccessTokenResponse {
    access_token: String,
}

#[derive(Deserialize)]
struct UserEmailResponse {
    email: String,
    primary: bool,
}

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

    pub async fn authorize(&mut self, code: String, state: String) -> Result<()> {
        let url = format!("{}/login/oauth/access_token", self.base_url);
        let json = json!({ "client_id": self.client_id, "client_secret": self.client_secret, "code": code, "state": state });

        let AccessTokenResponse { access_token } = ureq::post(url.as_str())
            .set("accept", "application/json")
            .send_json(json)
            .into_json_deserialize::<AccessTokenResponse>()?;

        self.access_token = Some(access_token);
        Ok(())
    }

    pub async fn get_user_email(&self) -> Result<String> {
        let access_token = self.access_token.as_ref().context("access_token is not set. Please call authorize to get an access token before calling this method.")?;
        let url = format!("{}/user/emails", self.api_url);
        let authorization_header = format!("token {}", access_token);
        let emails = ureq::get(url.as_str())
            .set("accept", "application/vnd.github.v3+json")
            .set("Authorization", authorization_header.as_str())
            .call()
            .into_json_deserialize::<Vec<UserEmailResponse>>()?;
        // .context("Failed to get GitHub user email")?;
        let email_response = emails.iter().find(|e| e.primary).context(
            "The user does not have a primary email with GitHub, could this ever happen?",
        )?;
        let primary_email = email_response.email.to_owned();
        Ok(primary_email)
    }
}

#[cfg(test)]
mod tests {
    use super::GitHubClient;
    use crate::config::Config;

    #[test]
    fn build_redirect_url_returns_identity_url_with_state() {
        let config = Config {
            github_api_url: String::new(),
            github_base_url: "https://github.com".to_string(),
            github_client_id: "id456789".to_string(),
            github_client_secret: String::new(),
            refresh_secret: String::new(),
            access_secret: String::new(),
            secure_cookies: false,
            web_url: String::new(),
            web_domain: String::new(),
        };

        let client = GitHubClient::new(&config);
        let state = "abc123";
        let redirect_url = client.build_redirect_url(state);
        assert_eq!(
            redirect_url,
            "https://github.com/login/oauth/authorize?client_id=id456789&state=abc123"
        );
    }
}
