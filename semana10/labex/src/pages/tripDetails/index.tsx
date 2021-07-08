import { useParams } from 'react-router-dom';
import { Header } from '../../components/header';

type ParamsType = {
  tripdetails: string
}

export const TripDetails = () => {
  // const history = useHistory();
  const params = useParams<ParamsType>();

  return (
    <div>
      <Header />
      <br /><br />
      <h1>Viagem ao Centro da Terra ({params.tripdetails})</h1>
      <p><span>Descrição: </span>Jungle! Welcome to the Jungle Baby!</p>
      <p><span>Planeta: </span>Terra</p>
      <p><span>Duração: </span>Bastante</p>
      <p><span>Data: </span>2021-07-05</p>
      <br />
      <br /><br />
      <h2>Candidatos Pendentes</h2>
      <p>Não há candidatos pendentes</p>
      <br /><br />
      <h2>Candidatos Aprovados</h2>
      <p>Não há candidatos aprovados</p>
    </div>
  )
}