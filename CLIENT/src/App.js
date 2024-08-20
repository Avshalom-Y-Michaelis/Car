import './App.css';
import backround from './Assets/backround.jpg';
import MainLayout from './Components/mainLayout/mainLayout';

function App() {

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
