import axios from 'axios';
import toast from "react-hot-toast";

type bodyProps = {
  username?: string,
  email: string,
  password: string
}

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL
})

export const postLogin = async (body: bodyProps) => {
  try {
    const res = await api.post('users/login', body)
    localStorage.setItem('token', res.data.token)
    window.location.reload()
    toast.success('Acesso permitido')
  } catch (err) {
    toast.error(err.response.data)
    window.location.reload()
  }
}

export const postSignUp = async (body: bodyProps) => {
  try {
    const res = await api.post('users/signup', body)
    localStorage.setItem('token', res.data.token)
    window.location.reload()
    toast.success(`Bem Vindo ${body.username}`)
  } catch (err) {
    toast.error(err.response.data)
    window.location.reload()
  }
}

export const getHandlePosts = async (setData: Function, token: string | null) => {
  try {
    const res = await api.get('posts', { headers: { Authorization: token }})
    setData(res.data)
  } catch (err) {
    toast.error(err.response.data)
  }
}

export const getHandlePostsComments = async (id: string, setData: Function, token: string | null) => {
  try {
    const res = await api.get(`posts/${id}/comments`, { headers: { Authorization: token }})
    setData(res.data)
  } catch (err) {
    toast.error(err.response.data)
  }
}