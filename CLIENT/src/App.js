import './App.css';
import backround from './Assets/backround.jpg';
import LayoutButton from './Components/layoutBoutton/layoutButton.js';
import MainLayout from './Pages/mainLayout/mainLayout';


function App() {
    return (
        <div className="app app-size">
            <img
                className="app-size"
                src={backround}
                alt=""
                style={{ position: 'absolute', display: 'block', zIndex: -1 }}
            ></img>
            <MainLayout style={{width: "100px", height: "100vh"}}/>
            <LayoutButton/>
        </div>
    );
}

export default App;
