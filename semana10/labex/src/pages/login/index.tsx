import { useHistory } from 'react-router-dom';

export const Login = () => {
  const history = useHistory();

  return (
    <div>
      <h1>Login</h1>
      <input type="text" placeholder='E-mail' />
      <input type="text" placeholder='Senha' />
      <button onClick={() => history.push('/')}>Voltar</button>
      <button onClick={() => history.push('/admin')}>Entrar</button>
    </div>
  )
}