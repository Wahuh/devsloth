from pydantic import BaseModel, EmailStr
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
from config import SENDGRID_API_KEY, DEVTRUCK_EMAIL


class Email(BaseModel):
    to: EmailStr
    subject: str
    content: str


def send(email: Email):
    message = Mail(
        to_emails=email.to,
        subject=email.subject,
        from_email=DEVTRUCK_EMAIL,
        html_content=email.content,
    )
    sg = SendGridAPIClient(api_key=SENDGRID_API_KEY)
    sg.send(message)
