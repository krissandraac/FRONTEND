import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost/inventory_exit_system/public/api',
    headers: { 'Content-Type': 'application/json' }
});

export default API;
