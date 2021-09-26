import axios from "axios";

const api = axios.create({
    baseURL: `http://192.168.1.96:5000/`, timeout:5000  //colocar ip (REDE)
   //baseURL: `http://192.168.0.111:5000/`, timeout: 5000 --> CASA D****
})

export default api;