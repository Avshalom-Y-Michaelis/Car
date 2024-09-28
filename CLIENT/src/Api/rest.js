import axios from 'axios';
import data from "../Stores/Constants.json"


export default {
    errors: {
    getAllErrors: () => axios.get(`${data.serverUrl}/get-all-errors`).then(res => res.data),
    resetErrors: () => axios.post(`${data.serverUrl}/reset-errors`).then(res => res.data),
},
cameras: {
    getReversCamera: () => axios.get(`${data.serverUrl}/video`).then(res => res.data),
}

}