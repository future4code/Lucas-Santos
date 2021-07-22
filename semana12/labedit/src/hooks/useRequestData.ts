import { useHistory } from "react-router-dom";
import toast from "react-hot-toast";
// import { api } from "../services/api";

type bodyProps = {
  email: string,
  password: string
}

export const usePostLogin = async (body: bodyProps) => {
  const history = useHistory()

  // try {
  //   const res = await api.post('users/login', body)
  //   localStorage.setItem('token', res.data.token)
  //   window.location.reload()
  //   toast.success('Acesso permitido')
  // } catch (err) {
  //   toast.error('Acesso negado: Verifique seu email e sua senha')
  //   history.push('/login')
  // }
}