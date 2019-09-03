FROM node:12-alpine

EXPOSE 3000

WORKDIR /usr/src/app

COPY . .

RUN npm install && npm cache clean --force

CMD [ "node", "./bin/www" ]