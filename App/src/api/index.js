import axios from 'axios';

const api = axios.create({
    baseURL: "http://172.20.62.16:3000"
});

export default api;