FROM node:latest
RUN mkdir nodejs_restapi
WORKDIR nodejs_restapi
COPY server.js .
COPY package.json .
COPY views ./views
RUN npm install
RUN npm install pm2 -g
RUN npm pack
EXPOSE 3000
ENTRYPOINT ["pm2-docker", "start","server.js"]
