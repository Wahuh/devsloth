use super::State;
use crate::{authn::GitHubClient, models::Challenge};
use tide::{Redirect, Request, Response, Result, StatusCode};

pub async fn health_check(_req: Request<State>) -> Result<Response> {
    let res = Response::new(StatusCode::Ok);
    Ok(res)
}

pub async fn github_redirect(req: Request<State>) -> Result<Response> {
    let client = GitHubClient::new(&req.state().github);
    let challenge = Challenge::new(&req.state().pool);
    let state = challenge.create_state().await?;
    let url = client.generate_redirect_url(state);
    Ok(Redirect::permanent(url).into())
}
