from fastapi import FastAPI
from email_kit import send, Email

app = FastAPI()


@app.post("/email/send", status_code=201)
async def send_email(email: Email):
    try:
        send(email)

    except Exception as e:
        print(str(e))
