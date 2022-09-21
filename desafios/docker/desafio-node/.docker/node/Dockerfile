FROM node:alpine

WORKDIR /app

COPY .docker/node/package.json .docker/node/index.js /app/

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]
