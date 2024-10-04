# Build Stage as build-stage
FROM node:latest 

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

ARG port
EXPOSE ${port}

RUN npm i -g serve
RUN npm run build

ENTRYPOINT ["serve", "-s", "build", "-l"]
CMD ["8080"]


#buil comend
#docker build -t car-client  --build-arg port=8080 .
#docker run --name client -d -p 8080:8080 car-client
