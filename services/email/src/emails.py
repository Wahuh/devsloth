from pydantic import BaseModel, EmailStr
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
from config import SENDGRID_API_KEY, DEVTRUCK_EMAIL


class ConfirmationCodeEmail(BaseModel):
    to: EmailStr
    code: str


def send(to, subject=None, template_id=None, **kwargs):
    message = Mail(to_emails=to, subject=subject, from_email=DEVTRUCK_EMAIL)

    if template_id:
        message.template_id = template_id
        message.dynamic_template_data = kwargs

    try:
        sg = SendGridAPIClient(api_key=SENDGRID_API_KEY)
        sg.send(message)
    except Exception as e:
        print(e)
