
FROM node:10-alpine

WORKDIR /usr/src/app/
ADD . .
RUN npm install

ENTRYPOINT [ "npm", "run", "start" ]