FROM node:alpine

EXPOSE 3000

RUN apk add --update tini

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app
COPY files/package.json package.json

RUN npm install

COPY files/. .

CMD [ "/sbin/tini", "--", "node", "./bin/www" ]