import { apiClient } from '../api.js'

const baseUrl = 'https://fakestoreapi.com'

export default {
    // Товары
    getProducts() {
        return apiClient(baseUrl).get('/products');
    },
    getProduct(id) {
        return apiClient(baseUrl).get(`/products/${id}`);
    },
    getCategories() {
        return apiClient(baseUrl).get('/products/categories');
    },
    getProductsInCategory(category) {
        return apiClient(baseUrl).get(`/products/category/${category}`);
    },

    // Корзина
    getCarts() {
        return apiClient.get('/carts');
    },
    getCart(id) {
        return apiClient.get(`/carts/${id}`);
    },

    // Пользователи
    getUsers() {
        return apiClient.get('/users');
    },
    getUser(id) {
        return apiClient.get(`/users/${id}`);
    },

    // Auth
    loginUser(credentials) {
        return apiClient.post('/auth/login', credentials);
    }
};