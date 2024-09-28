# Build Stage
FROM node:latest as build-stage

WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./
RUN npm install
COPY . .

RUN npm i serve

ARG port
EXPOSE ${port}

RUN set "SERVER_URL='server'"
 
# exsport SERVER_URL="server"

RUN npm run build
CMD ["npx","serve", "-l", ${port}, "-s", "build"]


#buil comend
#docker build -t car-client .
#
#
#