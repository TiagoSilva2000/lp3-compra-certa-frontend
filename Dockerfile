FROM node:15.11.0-alpine3.10

WORKDIR /app

ENV PATH=/app/node_modules/.bin:$PATH

RUN ["npm", "install", "--global", "react-scripts@4.0.3"]

COPY package*.json ./
RUN ["yarn"]
COPY . ./

CMD [ "yarn", "start" ]