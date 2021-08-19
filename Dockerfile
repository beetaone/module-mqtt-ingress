FROM node:buster-slim
WORKDIR /home/node/app
COPY . .

RUN npm install
CMD ["npm","run","start"]