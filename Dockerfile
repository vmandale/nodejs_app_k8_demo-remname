FROM node:latest
RUN mkdir nodejs_sample_app
WORKDIR nodejs_sample_app
COPY app.js .
COPY package.json .
RUN npm install
RUN npm install pm2 -g
RUN npm pack
EXPOSE 3000
ENTRYPOINT ["pm2-docker", "start","app.js"]
