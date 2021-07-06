import { useHistory } from 'react-router-dom';

export const ListTrips = () => {
  const history = useHistory();

  return (
    <div>
      <button onClick={() => history.push('/')}>Voltar</button>
      <button onClick={() => history.push('/subscribe')}>Inscrever-se</button>
      <h1>Lista de Viagens</h1>
      <p><span>Nome: </span>Viagem ao Centro da Terra</p>
      <p><span>Descrição: </span>Jungle! Welcome to the Jungle Baby!</p>
      <p><span>Planeta: </span>Terra</p>
      <p><span>Duração: </span>Bastante</p>
      <p><span>Data: </span>2021-07-05</p>
    </div>
  )
}