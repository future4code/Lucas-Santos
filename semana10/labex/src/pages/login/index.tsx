import { useHistory } from 'react-router-dom';
import { Header } from '../../components/header';

export const Login = () => {
  const history = useHistory();

  return (
    <div>
      <Header/>
      <br /><br />
      <h1>Login</h1>
      <input type="text" placeholder='E-mail' />
      <input type="text" placeholder='Senha' />
      <button onClick={() => history.replace('/admin')}>Entrar</button>
    </div>
  )
}