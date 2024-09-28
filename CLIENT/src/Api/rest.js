import axios from 'axios';
import data from "../Stores/Constants.json"

const PORT = process.env.SERVER_URL || data.serverUrl


export default {
    errors: {
    getAllErrors: () => axios.get(`${PORT}/get-all-errors`).then(res => res.data),
    resetErrors: () => axios.post(`${PORT}/reset-errors`).then(res => res.data),
},
cameras: {
    getReversCamera: () => axios.get(`${PORT}/video`).then(res => res.data),
}

}