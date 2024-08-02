FROM node:18-alpine

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install -g @angular/cli@16.2.0

RUN npm install


# ENTRYPOINT ["npm", "run", "json-run"]

# CMD ["ng", "serve", "--host", "0.0.0.0"]