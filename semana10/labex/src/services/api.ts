import axios from 'axios';

export const apiLabex = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL_LABEX
})

export const apiIBGE = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL_IBGE
})