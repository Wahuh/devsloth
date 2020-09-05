mod handlers;
mod routes;

use anyhow::Result;
use routes::add_routes;
use tide::Server;

fn setup_app() -> Server<()> {
    let mut app = Server::new();
    app = add_routes(app);
    app
}

pub async fn run() -> Result<()> {
    tide::log::start();
    let app = setup_app();
    app.listen("0.0.0.0:8080").await?;
    Ok(())
}
