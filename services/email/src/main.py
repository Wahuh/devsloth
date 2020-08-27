from fastapi import FastAPI
from emails import send, ConfirmationCodeEmail
from config import SENDGRID_CONFIRMATION_CODE_TEMPLATE_ID

app = FastAPI()


@app.post("/email/confirmation-code")
async def email_confirmation_code(email: ConfirmationCodeEmail):
    send(email.to, template_id=SENDGRID_CONFIRMATION_CODE_TEMPLATE_ID, code=email.code)
