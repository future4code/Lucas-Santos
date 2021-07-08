// import { useHistory } from 'react-router-dom';
import { Header } from '../../components/header';

export const SubscribeTrip = () => {
  // const history = useHistory();

  return (
    <div>
      <Header/>
      <br /><br />
      <h1>Inscreva-se para uma viagem</h1>
      <form>
        <input type="text" placeholder='Escolha uma Viagem' />
        <input type="text" placeholder='Nome' />
        <input type="number" placeholder='idade' />
        <input type="text" placeholder='Texto de Candidatura' />
        <input type="text" placeholder='Profissão' />
        <input type="text" placeholder='Escolha um País' />
        <button>Enviar</button>
      </form>
    </div>
  )
}