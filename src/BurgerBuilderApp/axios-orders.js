import axios from 'axios';

const instance = axios.create({
    baseURL: "http://localhost:8000"
});

instance.interceptors.request.use(request => {
    request.headers['Authorization'] = 'Bearer ' + JSON.parse(localStorage.getItem("user")).token;
    return request;
});

export default instance;
