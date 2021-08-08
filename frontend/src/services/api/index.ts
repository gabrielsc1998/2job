/**
 * 
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description File to make available the screens for the application
 * 
 */

import axios from 'axios';

const API_PORT = 3002;
const api = axios.create({
  baseURL: `http://localhost:${API_PORT}`,
});

export default api;