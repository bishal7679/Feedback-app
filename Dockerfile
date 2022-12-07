# Our node app is based on `18-alpine` image 
FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
RUN npm install -g concurrently

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
