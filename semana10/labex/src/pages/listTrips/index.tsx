import { useHistory } from 'react-router-dom';
import { Header } from '../../components/header';
import { useRequestGetTrip } from '../../hooks/useResquestData';

export const ListTrips = () => {
  const history = useHistory();
  const teste = useRequestGetTrip()

  return (
    <div>
      <Header />
      <br /><br />
      <button onClick={() => teste}>teste</button>
      <button onClick={() => history.push('/trips/subscribe')}>Inscrever-se</button>
      <h1>Lista de Viagens</h1>
      <p><span>Nome: </span>Viagem ao Centro da Terra</p>
      <p><span>Descrição: </span>Jungle! Welcome to the Jungle Baby!</p>
      <p><span>Planeta: </span>Terra</p>
      <p><span>Duração: </span>Bastante</p>
      <p><span>Data: </span>2021-07-05</p>
    </div>
  )
}