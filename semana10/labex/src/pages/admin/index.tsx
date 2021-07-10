import { toast } from 'react-hot-toast';
import { FaTrash } from 'react-icons/fa';
import { IoRocket } from 'react-icons/io5';
import { Link, useHistory } from 'react-router-dom';
import { ButtonDenied, ButtonPrimary } from '../../components/button';
import { Header } from '../../components/header';
import { useRequestGetTrip } from '../../hooks/useResquestData';
import { apiLabex } from '../../services/api';
import './styles.scss';

type TripListType = {
  id: string,
  name: string,
  description: string,
  planet: string,
  durationInDays: number,
  date: string
}

export const Admin = () => {
  const history = useHistory()
  const [ trips, isLoading, error ]: any[] = useRequestGetTrip()

  const logout = () => {
    localStorage.clear()
    history.replace('/')
    window.location.reload();
  }

  const deleteTrip = async (id: string, name: string) => {
    const token = localStorage.getItem('token')

    try {
      await apiLabex.delete(`trips/${id}`, { headers: { auth: token }})
      toast.success(`Viagem (${name}) excluída`);
      window.location.reload()
    } catch (err) {
      toast.error(`Error ao excluír a viagem`);
    }
  }

  return (
    <>
      <Header />
      <hr />
      <div className='header-admin'>
        <h2>Administrativo<span>{trips.length} Viagens cadastrada</span></h2>
        <div>
          <ButtonPrimary onClick={() => history.push('/admin/createtrip')}>Criar Viagem</ButtonPrimary>
          <ButtonDenied title='Deslogar' onClick={logout}>Sair</ButtonDenied>
        </div>
      </div>
      {isLoading && <img src="https://cdn.hotware.com.tw/v_comm/global/images/loading.gif" alt="loading" /> }
      {!isLoading && error && <p>Ocorreu um Erro</p>}
      {!isLoading && trips && trips.length > 0 && (
        trips.map(({id, name, planet}: TripListType) => {
          return (
            <div key={id} className='cards-container'>
              <div className='cards'>
                <Link to={`/admin/${id}`} title={`Detalhes de ${name}`}>
                  <img src={planet} alt="planet" />
                  {name}
                </Link>
                <div>
                  <button onClick={() => history.push(`/admin/${id}`)} className='accept' title={`Detalhes de ${name}`}><IoRocket/></button>
                  <button onClick={() => deleteTrip(id, name)} title='Excluir viagem' className='delete'><FaTrash/></button>
                </div>
              </div>
              <hr className='line-admin'/>
            </div>
          )
        })
      )}
      {!isLoading && trips && trips.length === 0 && (
        <p>Nenhuma viagem cadastrada</p>
      )}
    </>
  )
}