import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://challenge-labi9-4b4c472d5c07.herokuapp.com/api/',
    headers: {
        'Content-type': 'application/json'
    }
});

export default axiosInstance;