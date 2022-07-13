import axios from 'axios';

const axiosConfig = (token) => {
    axios.defaults.baseURL = '/';
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios.interceptors.request.use(
        (config) => {
            if (token !== null && token !== undefined) {
                config.headers.authorization = token;
            }
            return config;
        }
    )
}

export default axiosConfig;
