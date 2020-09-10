use super::State;
use tide::{Request, Response, Result, StatusCode};

pub async fn health_check(_req: Request<State>) -> Result<Response> {
    let res = Response::new(StatusCode::Ok);
    Ok(res)
}
