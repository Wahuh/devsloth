use anyhow::Result;
use sqlx::{Pool, Postgres};

pub struct Challenge<'a> {
    pool: &'a Pool<Postgres>,
}

impl Challenge<'_> {
    pub fn new(pool: &Pool<Postgres>) -> Challenge {
        Challenge { pool }
    }
    pub async fn create_state(&self) -> Result<String> {
        let row = sqlx::query!("INSERT INTO challenge DEFAULT VALUES RETURNING state")
            .fetch_one(self.pool)
            .await?;
        let state = row.state.to_string();
        Ok(state)
    }
}
