import axios from "axios";

const api = axios.create({
   // baseURL: `http://192.168.1.96:5000/`, timeout:5000  //colocar ip (REDE)
   baseURL: process.env.REACT_APP_API_URL
})

export default api;
