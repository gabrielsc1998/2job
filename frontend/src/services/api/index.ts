/**
 * 
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description 
 * 
 */

import axios from 'axios';

const API_PORT = 3002;
const api = axios.create({
  baseURL: `http://localhost:${API_PORT}`,
});

export default api;