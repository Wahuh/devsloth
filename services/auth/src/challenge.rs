use anyhow::Result;
use sqlx::PgPool;

pub struct Challenge {}

impl Challenge {
    pub async fn create_state(pool: &PgPool) -> Result<String> {
        let state = sqlx::query!("INSERT INTO challenge DEFAULT VALUES RETURNING state")
            .fetch_one(pool)
            .await?
            .state
            .to_string();
        Ok(state)
    }
}
