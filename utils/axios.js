import axios from 'axios'
import {BACKEND_URL} from "./constants";
import {logout, token} from "./auth";

const axiosClient = axios.create({
    baseURL: BACKEND_URL
})

setTimeout(() => {
     axiosClient.defaults.headers.common['Authorization'] = 'Bearer ' + token();
});

axiosClient.interceptors.response.use((response) => {
    return response;
}, (error) => {
    const status = error?.response?.status;

    if (status && [401, 403].includes(status)) {
        logout().then(r => r);
    } else {
        return Promise.reject(error);
    }
})

export default axiosClient;