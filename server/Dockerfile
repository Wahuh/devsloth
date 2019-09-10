FROM node:12

EXPOSE 3000

WORKDIR /app

COPY . .

RUN npm install && npm cache clean --force

CMD [ "node", "./bin/www" ]