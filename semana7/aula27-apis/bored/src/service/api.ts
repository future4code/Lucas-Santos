import axios from 'axios';

const api = axios.create({
  baseURL: 'http://www.boredapi.com/api/activity/'
});

export default api;