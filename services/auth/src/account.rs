use anyhow::Result;
use chrono::{Duration, Utc};
use jsonwebtoken::{encode, EncodingKey, Header};
use serde::{Deserialize, Serialize};
use sqlx::{Pool, Postgres};

pub struct Account {
    id: i32,
}

impl Account {
    pub async fn find(
        pool: &Pool<Postgres>,
        email: &String,
    ) -> Result<Option<Account>, sqlx::Error> {
        let row = sqlx::query!("SELECT id FROM account WHERE email = $1 LIMIT 1", email)
            .fetch_one(pool)
            .await;

        let account = match row {
            Err(sqlx::Error::RowNotFound) => None,
            Err(err) => return Err(err),
            Ok(row) => Some(Account { id: row.id }),
        };
        Ok(account)
    }

    pub async fn create(pool: &Pool<Postgres>, email: &String) -> Result<Account> {
        let row = sqlx::query!(
            "INSERT INTO account (email) VALUES ($1) RETURNING id, email",
            email
        )
        .fetch_one(pool)
        .await?;
        let account = Account { id: row.id };
        Ok(account)
    }

    pub fn generate_access_token(&self, secret: &String) -> Result<String> {
        let claims = Claims {
            id: self.id,
            exp: (Utc::now() + Duration::minutes(15)).timestamp() as usize,
        };
        let token = encode(
            &Header::default(),
            &claims,
            &EncodingKey::from_secret(secret.as_ref()),
        )?;
        Ok(token)
    }

    pub async fn generate_refresh_token(
        &self,
        pool: &Pool<Postgres>,
        secret: &String,
    ) -> Result<String> {
        let claims = Claims {
            id: self.id,
            exp: (Utc::now() + Duration::days(30)).timestamp() as usize,
        };
        let token = encode(
            &Header::default(),
            &claims,
            &EncodingKey::from_secret(secret.as_ref()),
        )?;
        sqlx::query!(
            "UPDATE account SET refresh_token = $1 WHERE id = $2",
            &token,
            self.id
        )
        .execute(pool)
        .await?;
        Ok(token)
    }
}
#[derive(Debug, Serialize, Deserialize)]
struct Claims {
    id: i32,
    exp: usize,
}
