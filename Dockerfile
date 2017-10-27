FROM node:6.9.2
EXPOSE 8080
COPY app.js .
COPY package.json .
CMD node app.js
