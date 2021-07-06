import { useHistory } from 'react-router-dom';

export const Admin = () => {
  const history = useHistory();

  return (
    <div>
      <h1>Painel Administrativo</h1>
      <button onClick={() => history.push('/')}>Voltar</button>
      <button onClick={() => history.push('/createtrip')}>Criar Viagem</button>
      <button onClick={() => history.push('/')}>Logout</button>
      <div>
        <p>Viagem 1 <span>X</span></p>
        <p>Viagem 2 <span>X</span></p>
        <p>Viagem 3 <span>X</span></p>
        <p>Viagem 4 <span>X</span></p>
      </div>
    </div>
  )
}