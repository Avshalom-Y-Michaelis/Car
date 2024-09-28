import './App.css';
import backround from './Assets/backround.jpg';
import LayoutButton from './Components/layoutBoutton/layoutButton.js';
import GaugesPage from './Pages/gaugesPage/gaugesPage.js';
import ReversCamer from "./Components/cameras/reversCamera.js"
import ErrorsPage from "./Pages/errorsPage/errorsPage.js"
import API from "../src/Api/rest.js"


function App() {
    return (
        <div className="app app-size">
            <img
                className="app-size"
                src={backround}
                alt=""
                style={{ position: 'absolute', display: 'block', zIndex: -1 }}
            ></img>
            <GaugesPage/>
            {/* <ErrorsPage /> */}
            <LayoutButton />
            {/* <ReversCamer /> */}
            <h1 style={{color: "#ffffff"}}>{process.env.SERVER_URL}</h1>
        </div>
    );
}

export default App;
