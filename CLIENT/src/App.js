import './App.css';
import backround from './Assets/backround.jpg';
import LayoutButton from './Components/layoutBoutton/layoutButton.js';
import MainLayout from './Components/mainLayout/mainLayout';


function App() {
    return (
        <div className="App">
            <img
                src={backround}
                alt=""
                style={{ position: 'fixed', display: 'block', width: '100vw', zIndex: -1 }}
            ></img>
            {/* <MainLayout style={{width: "100px", height: "100vh"}}/> */}
            <LayoutButton></LayoutButton>
        </div>
    );
}

export default App;
