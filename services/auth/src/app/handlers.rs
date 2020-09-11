use super::State;
use crate::authz::{continue_with_github, generate_redirect_url, AuthorizationResult};
use serde::Deserialize;
use tide::{http::Cookie, Request, Response, Result, StatusCode};

pub async fn health_check(_req: Request<State>) -> Result<Response> {
    let res = Response::new(StatusCode::Ok);
    Ok(res)
}

pub async fn github_redirect(req: Request<State>) -> Result<Response> {
    let url = generate_redirect_url(&req.state().config, &req.state().pool).await?;
    let response = Response::builder(301)
        .header("Cache-Control", "no-store")
        .header("Location", url)
        .build();
    Ok(response)
}

#[derive(Deserialize)]
struct GitHubContinueQuery {
    state: String,
    code: String,
}

pub async fn github_continue(req: Request<State>) -> Result<Response> {
    let query: GitHubContinueQuery = match req.query() {
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
        .secure(req.state().config.secure_cookies)
        .http_only(true)
        .finish();

    let refresh_cookie = Cookie::build("refresh_token", refresh_token)
        .domain(req.state().config.web_url.to_owned())
        .secure(req.state().config.secure_cookies)
        .http_only(true)
        .finish();

    let location = format!("{}/@me", &req.state().config.web_url);

    let mut response = Response::builder(301)
        .header("Cache-Control", "no-store")
        .header("Location", location)
        .build();
    response.insert_cookie(access_cookie);
    response.insert_cookie(refresh_cookie);
    Ok(response)
}
