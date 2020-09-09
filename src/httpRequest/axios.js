import axios from 'axios';

const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
instance.defaults.headers.post['Content-Type'] = 'application/json';

instance.interceptors.request.use((req) => {
    console.log(req)
    return req;
}, error => {
    return Promise.reject(error);
});

instance.interceptors.response.use((req) => {
    console.log(req);
    return req;
}, error => {
    console.log(error);
    return Promise.reject(error);
});



export default instance;
