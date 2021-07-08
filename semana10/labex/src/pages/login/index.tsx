import { useHistory } from 'react-router-dom';
import { ButtonPrimary, ButtonSuccess } from '../../components/button';
import { Header } from '../../components/header';

export const Login = () => {
  const history = useHistory();

  return (
    <div>
      <Header/>
      <hr />
      <div className='header'>
        <h2>Login</h2>
        <ButtonPrimary onClick={() => history.push('/')}>Voltar</ButtonPrimary>
      </div>
      <div className='teste'>
        <input type="text" placeholder='E-mail' />
        <input type="text" placeholder='Senha' />
        <ButtonSuccess onClick={() => history.replace('/admin')}>Entrar</ButtonSuccess>
      </div>
    </div>
  )
}