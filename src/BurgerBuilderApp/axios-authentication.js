import axios from 'axios';

const instance = axios.create({
    baseURL: "http://localhost:8000/authenticate"
});

instance.interceptors.response.use(response => {
    localStorage.setItem("user", JSON.stringify({
        userName: response.data.username,
        token: response.data.token
    }));
    return response;
});

export default instance;
