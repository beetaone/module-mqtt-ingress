FROM node:lts-alpine3.13

WORKDIR /home/node/app
COPY . .

RUN npm ci
CMD ["npm","run","start"]