import './baseWindow.css';

function BaseWindow({ gridArea, shadowColor, shadowH, shadowV, content, titel }) {
    let width = '100%';
    let height = '100%';
    return (
        <div
            className="baseWindow"
            style={{
                width: width,
                height: height,
                boxShadow: `${shadowV} ${shadowH} ${shadowColor}`,
                gridArea: gridArea,
            }}
        >
            <div style={{fontSize: "150%", color: shadowColor }}>
                {titel}
            </div>
            {content}
        </div>
    );
}

export default BaseWindow;
