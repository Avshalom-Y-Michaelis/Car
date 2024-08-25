import './App.css';
import backround from './Assets/backround.jpg';
import MainLayout from './Components/mainLayout/mainLayout';


function App() {
    return (
        <div className="App">
            <img
                src={backround}
                alt=""
                style={{ position: 'fixed', display: 'block', width: '100vw', zIndex: -1 }}
            ></img>
            <MainLayout style={{width: "100px", height: "100vh"}}/>
        </div>
    );
}

export default App;
