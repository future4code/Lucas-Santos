import axios from 'axios';

const api = axios.create({
  baseURL: 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/',
  headers: {'Authorization': 'lucas-gomes-molina'}
});

export default api;