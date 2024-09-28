import API from "../../Api/rest"


export default function ReversCamera() {
    console.log(API.cameras.getReversCamera())
    return (
        <div>
            <div dangerouslySetInnerHTML= {{ __html: API.cameras.getReversCamera() }} ></div>

        </div>
    );
}
