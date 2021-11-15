FROM node:14-alpine

WORKDIR /usr/src/app

COPY ./package*.json ./
RUN [ "npm", "install"]

WORKDIR /usr/src/app
COPY ./src ./src

CMD ["npm", "run", "start"]
