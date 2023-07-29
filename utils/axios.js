import axios from 'axios'
import {logout, token} from "./auth";
import {API_URL} from "./constants";

const axiosClient = axios.create({
    baseURL: API_URL
})

setTimeout(() => {
     axiosClient.defaults.headers.common['authorization'] = token();
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