import './App.css';
import backround from './Assets/backround.jpg';
import MainLayout from './Components/mainLayout/mainLayout';
import { io } from 'socket.io-client';
import axios from 'axios';

function App() {
    const socket = io('http://127.0.0.1:5000', {
        transport: 'polling',
        cors: {
            origin: 'http://localhost:3000',
        },
    });

    socket.on('connect', (data) => {
        console.log('connected');
        console.log(data);
    });

    socket.on('my event', (data) => {
        console.log('in socket');
        console.log(data);
    });
    axios.get(`http://127.0.0.1:5000/a`).then((res) => console.log(res.data));

    return (
        <div className="App">
            <img
                src={backround}
                alt=""
                style={{ position: 'fixed', display: 'block', width: '100vw' }}
            ></img>
            <MainLayout />
        </div>
    );
}

export default App;
