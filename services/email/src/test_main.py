from fastapi.testclient import TestClient
import pytest
from main import app

client = TestClient(app)


@pytest.mark.parametrize(
    "email", ["example.com", "A@b@c@domain.com", "test@domain..com"]
)
def test_email_confirmation_code_with_invalid_email(mocker, email):
    mock_send = mocker.patch("email_kit.send", return_value=None)
    response = client.post("/email/send", json={"to": email, "code": "ABCDXS"},)
    assert response.status_code == 422
    mock_send.assert_not_called()
