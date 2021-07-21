FROM node:16.5.0-alpine3.13

WORKDIR /app
COPY . .
RUN npm i --production

CMD ["node", "/app/src/index.js"]

# Create the image:
# docker build -t getting-started .

# Runs the docker image from the app:
# docker run getting-started
# docker run -p 3000:3000 getting-started

# docker -v /Users/username/appname/etc/:etc/todos -p 3000:3000 -d getting-started
