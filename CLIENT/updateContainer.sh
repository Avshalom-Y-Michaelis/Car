#!/bin/bash
IMAGE_NAME="car-client-image"
CONTAINER_NAME="car-client"

export SERVER_URL="server"
export CLIENT_PORT=8085

sudo docker rm -f $CONTAINER_NAME
sudo docker image rm -f $IMAGE_NAME

sudo docker build -t $IMAGE_NAME  --build-arg port=${CLIENT_PORT} .
sudo docker run --name $CONTAINER_NAME -d -p ${CLIENT_PORT}:${CLIENT_PORT} $IMAGE_NAME  ${CLIENT_PORT}

#chmod 754 updateContainer.bat