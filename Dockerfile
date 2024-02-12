FROM node:18

COPY . src/app

RUN npm install yarn


CMD [ "yar", "serve" ]