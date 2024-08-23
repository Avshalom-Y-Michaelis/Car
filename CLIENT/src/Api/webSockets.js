import { io } from 'socket.io-client';
import data from "../Stores/Constants.json"

let webSocket

const createWebSocketConnection = ()  => {
    webSocket = io(data.serverUrl, {
        transport: 'polling',
        cors: {
            origin: data.clientUrl,
        },
    });

}

const addEvetnLisiner = (eventName, callback) => {
    webSocket.on(eventName, callback)
}

webSocket.on('connect', () => {
    console.log('--------------- web socket connected ------------------');
});

export {
    createWebSocketConnection,
    addEvetnLisiner
}