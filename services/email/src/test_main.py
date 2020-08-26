from fastapi.testclient import TestClient
from main import app

client = TestClient(app)


def test_send_email(mocker):
    mocker.patch("email_kit.send", return_value=None)
    response = client.post(
        "/email/send",
        json={"to": "tmdoan98@gmail.com", "subject": "hello", "content": "world"},
    )
    assert response.status_code == 201
