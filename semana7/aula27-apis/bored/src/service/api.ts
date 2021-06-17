import axios from 'axios'

const api = axios.create({
  baseURL: 'https://www.boredapi.com/api/activity/'
})

export default api