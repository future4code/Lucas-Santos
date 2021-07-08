import toast from 'react-hot-toast';
import { useHistory } from 'react-router-dom';
import { Header } from '../../components/header';

export const Admin = () => {
  const history = useHistory()

  const foi = () => {
    toast('Foi Sim')
    toast.success('Successfully toasted!')
    history.push('/admin/trip1')
  }

  return (
    <div>
      <Header />
      <br /><br />
      <h1>Painel Administrativo</h1>
      <button onClick={() => history.push('/admin/createtrip')}>Criar Viagem</button>
      <button onClick={() => history.push('/')}>Logout</button>
      <div>
        <br />
        <button onClick={foi}>Viagem 1 <span>X</span></button>
        <button onClick={() => history.push('/admin/trip2')}>Viagem 2 <span>X</span></button>
        <button onClick={() => history.push('/admin/trip3')}>Viagem 3 <span>X</span></button>
        <button onClick={() => history.push('/admin/trip4')}>Viagem 4 <span>X</span></button>
      </div>
    </div>
  )
}