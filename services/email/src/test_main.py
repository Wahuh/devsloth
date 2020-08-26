from fastapi.testclient import TestClient
import pytest
from main import app

client = TestClient(app)


def test_send_email(mocker):
    mocker.patch("email_kit.send", return_value=None)
    response = client.post(
        "/email/send",
        json={"to": "tmdoan98@gmail.com", "subject": "hello", "content": "world"},
    )
    assert response.status_code == 201


@pytest.mark.parametrize(
    "email", ["example.com", "A@b@c@domain.com", "test@domain..com"]
)
def test_send_email_invalid_email(mocker, email):
    mock_send = mocker.patch("email_kit.send", return_value=None)
    response = client.post(
        "/email/send", json={"to": email, "subject": "hello", "content": "world"},
    )
    assert response.status_code == 422
    mock_send.assert_not_called()
