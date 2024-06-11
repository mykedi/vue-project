import axios from 'axios';

// Create an axios instance
export const apiClient = (url) => axios.create({
    baseURL: url,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000,
});