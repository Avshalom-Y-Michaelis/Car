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
            <div style={{fontSize: "500%", color: shadowColor, fontWeight: 1000}}>
                {titel}
            </div>
            {content}
        </div>
    );
}

export default BaseWindow;
