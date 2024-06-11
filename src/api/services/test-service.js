import { apiClient } from '../api.js'

const baseUrl = 'https://httpbin.org'

export default {
    sendData(data) {
        return apiClient(baseUrl).post('/post', data);
    },
}