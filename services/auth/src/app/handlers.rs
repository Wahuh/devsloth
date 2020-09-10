use super::State;
use crate::{
    authz::continue_with_github, authz::AuthorizationResult, github::GitHubClient,
    models::Challenge,
};
use serde::Deserialize;
use tide::{http::Cookie, Redirect, Request, Response, Result, StatusCode};

pub async fn health_check(_req: Request<State>) -> Result<Response> {
    let res = Response::new(StatusCode::Ok);
    Ok(res)
}

pub async fn github_redirect(req: Request<State>) -> Result<Response> {
    let client = GitHubClient::new(&req.state().config);
    let challenge = Challenge::new(&req.state().pool);
    let state = challenge.create_state().await?;
    let url = client.generate_redirect_url(state);
    Ok(Redirect::permanent(url).into())
}

#[derive(Deserialize)]
pub struct GitHubRedirectQuery {
    state: String,
    code: String,
}

pub async fn github_continue(req: Request<State>) -> Result<Response> {
    let query: GitHubRedirectQuery = match req.query() {
        Ok(query) => query,
        Err(_e) => return Ok(Response::new(StatusCode::NotFound)),
    };

    let AuthorizationResult {
        access_token,
        refresh_token,
    } = continue_with_github(
        &req.state().config,
        &req.state().pool,
        query.code,
        query.state,
    )
    .await?;

    let access_cookie = Cookie::build("access_token", access_token)
        .domain(req.state().config.web_url.to_owned())
        .secure(true)
        .http_only(true)
        .finish();

    let refresh_cookie = Cookie::build("refresh_token", refresh_token)
        .domain(req.state().config.web_url.to_owned())
        .secure(true)
        .http_only(true)
        .finish();

    let location = format!("{}", &req.state().config.web_url);
    let mut response = Response::builder(301).header("Location", location).build();
    response.insert_cookie(access_cookie);
    response.insert_cookie(refresh_cookie);
    Ok(response)
}
