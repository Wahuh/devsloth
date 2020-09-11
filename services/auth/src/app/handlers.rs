use crate::authz::generate_redirect_url;

use super::State;
use tide::{Request, Response, Result, StatusCode};

pub async fn health_check(_req: Request<State>) -> Result<Response> {
    let res = Response::new(StatusCode::Ok);
    Ok(res)
}

pub async fn github_redirect(req: Request<State>) -> Result<Response> {
    let url = generate_redirect_url(&req.state().config, &req.state().pool).await?;
    let response = Response::builder(301).header("Location", url).build();
    Ok(response)
}
