import axios from 'axios';

export const apiLabex = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL
})

export const apiIBGE = axios.create({
  baseURL: 'https://servicodados.ibge.gov.br/api/v1/paises/'
})