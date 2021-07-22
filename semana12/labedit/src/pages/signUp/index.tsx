import { useState, useEffect, FormEvent } from "react"
import { useHistory } from "react-router-dom"
import { Button, TextField } from "@material-ui/core"
import { postSignUp } from "../../services/api"
import { logo } from "../../assets/images/all"
import { ScreenContainer, LogoImage } from "./styles"

export const SignUp = () => {
  const history = useHistory()
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  })

  const token = localStorage.getItem('token')

  useEffect(() => {
    if (token !== null) {
      history.replace('/')
    }
  }, [history, token])

  const createAccount = async (e: FormEvent) => {
    e.preventDefault();
    postSignUp(form)
  }

  return (
    <ScreenContainer>
      <LogoImage src={logo} />
      <form onSubmit={createAccount}>
        <TextField
          name={'username'}
          value={form.username}
          type={'name'}
          onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
          label={'Nome'}
          variant={'outlined'}
          margin={'normal'}
          fullWidth
          required
        />
        <TextField
          name={'email'}
          value={form.email}
          type={'email'}
          onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
          label={'E-mail'}
          variant={'outlined'}
          margin={'normal'}
          fullWidth
          required
        />
        <TextField
          name={'password'}
          value={form.password}
          type={'password'}
          onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
          label={'Senha'}
          variant={'outlined'}
          margin={'normal'}
          fullWidth
          required
        />
        <Button
          type={'submit'}
          variant={'contained'}
          color={'primary'}
          fullWidth
        >
          Fazer Cadastro
        </Button>
      </form>
    </ScreenContainer>
  )
}