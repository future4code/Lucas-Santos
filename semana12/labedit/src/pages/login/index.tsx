import { useState, useEffect, FormEvent } from "react"
import { useHistory } from "react-router-dom"
import { Button, TextField } from "@material-ui/core"
import { postLogin } from "../../services/api"
import { logo } from "../../assets/images/all"
import { ScreenContainer, LogoImage, SignUpButtonContainer } from "./styles"

export const Login = () => {
  const history = useHistory()
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const token = localStorage.getItem('token')

  useEffect(() => {
    if (token !== null) {
      history.replace('/')
    }
  }, [history, token])

  const submitLogin = async (e: FormEvent) => {
    e.preventDefault();
    postLogin(form)
  }

  return (
    <ScreenContainer>
      <LogoImage src={logo} />
      <form onSubmit={submitLogin}>
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
          Fazer Login
        </Button>
      </form>
      <SignUpButtonContainer>
        <Button
          onClick={() => history.push('/cadastro')}
          type={"submit"}
          fullWidth
          variant={"text"}
          color={"primary"}
        >
          Não possui conta? Cadastre-se
        </Button>
      </SignUpButtonContainer>
    </ScreenContainer>
  )
}