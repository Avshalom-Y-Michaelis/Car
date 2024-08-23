import axios from 'axios';
import data from "../Stores/Constants.json"



axios.get(`${data.serverUrl}/a`).then((res) => console.log(res.data));