import { useState, useEffect, FormEvent } from 'react';
import { toast } from 'react-hot-toast';
import { useHistory } from 'react-router-dom';
import { apiLabex } from '../../services/api';
import { ButtonPrimary, ButtonSuccess } from '../../components/button';
import { Header } from '../../components/header';
import { Footer } from '../../components/footer';

export const Login = () => {
  const history = useHistory();
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const token = localStorage.getItem('token')

  useEffect(() => {
    if (token !== null) {
      history.replace('/admin')
    }
  }, [history, token])
  
  const submitLogin = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await apiLabex.post('login', form)
      localStorage.setItem('token', res.data.token)
      window.location.reload()
      toast.success('Acesso permitido')
    } catch (err) {
      toast.error('Acesso negado: Verifique seu email e sua senha')
      history.push('/login')
    }
  }

  return (
    <div>
      <Header/>
      <hr />
      <div className='header'>
        <h2>Login</h2>
        <ButtonPrimary onClick={() => history.push('/')}>Voltar</ButtonPrimary>
      </div>
      <form onSubmit={submitLogin}>
        <input
          name='email'
          value={form.email}
          type="email"
          onChange={(e) => setForm({...form, [e.target.name]: e.target.value})}
          placeholder='E-mail'
          required
        />
        <input
          name='password'
          value={form.password}
          type="password"
          onChange={(e) => setForm({...form, [e.target.name]: e.target.value})}
          placeholder='Senha'
          pattern='^.{6,}'
          title='Mínimo de 6 dígitos'
          required
        />
        <ButtonSuccess>Entrar</ButtonSuccess>
      </form>
      <Footer />
    </div>
  )
}