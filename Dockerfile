FROM node:14-alpine3.14
WORKDIR /home/node/app
COPY . .
RUN set NODE_OPTIONS=--max-old-space-size=30720
RUN npm install
CMD ["npm","run","start"]
