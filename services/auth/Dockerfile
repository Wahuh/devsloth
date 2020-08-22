FROM node:14-slim

WORKDIR /node

COPY package*.json ./

RUN mkdir app && chown -R node:node .

USER node

RUN npm install && npm cache clean --force

WORKDIR /node/app

COPY --chown=node:node . .

ENV PORT=3000

EXPOSE ${PORT}

CMD node index.js