FROM python:3.8-slim

EXPOSE 80

WORKDIR /app

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY src .

CMD uvicorn main:app --host 0.0.0.0 --port 80