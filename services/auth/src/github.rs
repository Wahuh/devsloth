use crate::config::Config;
use anyhow::{anyhow, Context, Result};
use serde::{Deserialize, Serialize};
use serde_json::json;

#[derive(Deserialize, Serialize)]
struct AccessTokenResponse {
    access_token: String,
    scope: String,
    token_type: String,
}

#[derive(Deserialize)]
struct UserEmailResponse {
    email: String,
    primary: bool,
}

pub struct GitHubClient {
    api_url: String,
    base_url: String,
    client_id: String,
    client_secret: String,
    access_token: Option<String>,
}

impl GitHubClient {
    pub fn new(config: &Config) -> GitHubClient {
        GitHubClient {
            access_token: None,
            api_url: config.github_api_url.to_owned(),
            base_url: config.github_base_url.to_owned(),
            client_id: config.github_client_id.to_owned(),
            client_secret: config.github_client_secret.to_owned(),
        }
    }

    pub fn generate_redirect_url<S>(&self, state: S) -> String
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

    pub async fn authorize<S>(&mut self, code: S, state: S) -> Result<()>
    where
        S: Into<String>,
    {
        let url = format!("{}/login/oauth/access_token", self.base_url);
        let json = json!({ "client_id": self.client_id, "client_secret": self.client_secret, "code": code.into(), "state": state.into() });
        println!("{}", json);
        let AccessTokenResponse {
            access_token,
            scope,
            token_type,
        } = surf::post(url)
            .set_header("accept", "application/json")
            .body_json(&json)?
            .recv_json()
            .await
            .map_err(|err| anyhow!(err))
            .context("Failed to authorize with GitHub")?;
        self.access_token = Some(access_token);
        Ok(())
    }

    pub async fn get_user_email(&self) -> Result<String> {
        let access_token = self.access_token.as_ref().context("access_token is not set. Please call authorize to get an access token before calling this method.")?;
        let url = format!("{}/user/emails", self.api_url);
        let emails: Vec<UserEmailResponse> = surf::get(url)
            .set_header("accept", "application/vnd.github.v3+json")
            .set_header("Authorization", format!("token {}", access_token))
            .recv_json()
            .await
            .map_err(|err| anyhow!(err))?;
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
    use crate::config::Config;

    use super::GitHubClient;

    #[test]
    fn generate_redirect_url_returns_identity_url_with_state() {
        let config = Config {
            github_api_url: String::new(),
            github_base_url: "https://github.com".to_string(),
            github_client_id: "id456789".to_string(),
            github_client_secret: String::new(),
            refresh_secret: String::new(),
            access_secret: String::new(),
            web_url: String::new(),
            web_domain: String::new(),
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
