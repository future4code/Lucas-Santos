// import { useHistory } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { ButtonPrimary, ButtonSuccess } from '../../components/button';
import { Header } from '../../components/header';

import './styles.scss'

export const SubscribeTrip = () => {
  const history = useHistory();

  return (
    <div>
      <Header/>
      <hr />
      <div className='header'>
        <h2>Inscreva-se</h2>
        <ButtonPrimary onClick={() => history.goBack()}>Voltar</ButtonPrimary>
      </div>
      <form>
        <input type="text" placeholder='Escolha uma Viagem' />
        <input type="text" placeholder='Nome' />
        <input type="number" placeholder='idade' />
        <input type="text" placeholder='Texto de Candidatura' />
        <input type="text" placeholder='Profissão' />
        <input type="text" placeholder='Escolha um País' />
        <ButtonSuccess>Enviar</ButtonSuccess>
      </form>
    </div>
  )
}