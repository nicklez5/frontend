FROM node:22-alpine3.19

COPY package.json package-lock.json 

RUN npm install 

COPY . .

RUN npm build
