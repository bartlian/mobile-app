import axios from 'axios';
const instance = axios.create({
  baseURL: '/api',
  timeout: 60 * 1000,
  headers: {'x-access-token': ''},
});

export default instance.request;