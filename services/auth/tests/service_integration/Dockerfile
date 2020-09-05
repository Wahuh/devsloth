FROM node:14-alpine
WORKDIR /usr/src
COPY package*json ./
RUN npm install --only=dev
COPY . .
CMD npm test