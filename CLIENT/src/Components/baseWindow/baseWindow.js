import './baseWindow.css';

function BaseWindow({gridArea, shadowColor}) {
    let width = "100%";
    let height = "100%";
    let shadowBox = `5px 0px #${shadowColor}`
    return (
        <div
            className="baseWindow"
            style={{
                width: width,
                height: height,
                boxShadow: shadowBox,
                gridArea: gridArea
            }}
        ></div>
    );
}

export default BaseWindow;
