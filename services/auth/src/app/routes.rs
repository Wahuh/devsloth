use super::handlers::health_check;
use tide::Server;

pub fn add_routes(mut app: Server<()>) -> Server<()> {
    app.at("/healthz").get(health_check);
    app
}
