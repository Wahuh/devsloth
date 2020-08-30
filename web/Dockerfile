FROM node:14-slim

EXPOSE 3000

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV API_URL=http://api.localhost/

CMD npm start 