import { useHistory } from 'react-router-dom';

export const Home = () => {
  const history = useHistory();

  return (
    <div>
      <h1>Labex</h1>
      <button onClick={() => history.push('/trips')}>Ver Viagens</button>
      <button onClick={() => history.push('/login')}>Área de Admin</button>
    </div>
  )
}