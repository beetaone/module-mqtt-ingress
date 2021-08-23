FROM node:current-stretch-slim
WORKDIR /home/node/app
COPY . .
RUN set NODE_OPTIONS=--max-old-space-size=30720
RUN npm install
CMD ["npm","run","start"]
