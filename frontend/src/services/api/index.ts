/**
 *
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description
 *
 */

import axios from 'axios';

import config from '../../config/index';

const api = axios.create({
  baseURL: config.api.url,
  headers: {
    token: localStorage.getItem('token'),
  },
});

export default api;
