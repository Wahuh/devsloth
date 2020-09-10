use super::{handlers::health_check, State};
use tide::Server;

pub fn add_routes(mut app: Server<State>) -> Server<State> {
    app.at("/healthz").get(health_check);
    app
}