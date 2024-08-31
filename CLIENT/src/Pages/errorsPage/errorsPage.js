import BaseWindow from "../../Components/baseWindow/baseWindow";
import enumsStore from "../../Stores/enumsStore.json"
import colorStor from "../../Stores/ColorStore.json"

function ErrorsPage() {

    return (
        <div style={{margin: "auto", width: "80%", height: "80%"}}>
            <BaseWindow
                // layoutGrid={layoutGrid}
                shadowColor={colorStor.shadow.orenge}
                shadowH={enumsStore.shadowDirection.down}
                shadowV={enumsStore.shadowDirection.left}
                titel={"ALL TROBULS"}
                //content={<div>hellow world</div>}
                
                />
        </div>

    );
}

export default ErrorsPage;
