import axios from 'axios';

const jwtToken = window.localStorage.getItem('token');

const api = axios.create({
  baseURL: 'https://hemsut-api.herokuapp.com/api',
  timeout: 1000,
  headers: {
    Authorization: jwtToken,
  },
});

export default api;
