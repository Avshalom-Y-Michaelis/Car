import { io } from 'socket.io-client';
import data from '../Stores/Constants.json';

// let webSocket = io(data.serverUrl, {
//     transport: 'polling',
//     cors: {
//         origin: data.clientUrl,
//     },
// });

// const createWebSocketConnection = () => {
//     webSocket = io(data.serverUrl, {
//         transport: 'polling',
//         cors: {
//             origin: data.clientUrl,
//         },
//     });
// };

const getWebSocketConnection = (nameSpace = '') => {
    return io(`${data.serverUrl}/${nameSpace}`, {
        transport: 'polling',
        cors: {
            origin: data.clientUrl,
        },
    });
};

const createDataConnection = (nameSpace = '/', eventObj) => {
    const socket = getWebSocketConnection(nameSpace);

    socket.on('connect', () => {
        console.log(`--------------- web socket ${nameSpace} connected ------------------`);
    });

    Object.keys(eventObj).forEach((event) => {
        socket.on('update_data', (data) => {
            if (data.name === event) {
                eventObj[event](data.value);
            }
        });
    });
};

// webSocket.on("update_data", (data) => {
//     if (data.name === "RPM") {
//         console.log(data)}
//     }
// )
// const addEvetnLisiner = (eventName, nameSpace="/",callback ) => {
//     webSocket.of(nameSpace).on(eventName, callback)
// }

// webSocket.on('connect', () => {
//     console.log('--------------- web socket connected ------------------');
// });

export { createDataConnection };
