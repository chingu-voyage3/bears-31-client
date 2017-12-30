import axios from 'axios';

const jwtToken = window.localStorage.getItem('token');

const api = axios.create({
  baseURL: 'http://localhost:9000/api',
  timeout: 1000,
  headers: {
    Authorization: jwtToken,
  },
});

export default api;
