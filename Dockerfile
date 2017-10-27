FROM node:6.9.2
EXPOSE 8080
RUN mkdir nodejs_sample_app
WOKDIR nodejs_sample_app
COPY app.js .
COPY package.json .
COPY node_modules .
CMD node app.js
