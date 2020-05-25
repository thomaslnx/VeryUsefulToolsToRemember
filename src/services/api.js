import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
  // baseURL: 'https://thomaslnxvuttr.herokuapp.com',
  headers: { 'Content-type': 'application/json' },
});

export default api;
