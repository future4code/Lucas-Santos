import { CardsTrips } from '../../components/CardsTrips';
import { Header } from '../../components/header';
import { useRequestGetTrip } from '../../hooks/useResquestData';

import './styles.scss'

export const ListTrips = () => {
  const [trips, isLoading, error]: any[] = useRequestGetTrip()

  return (
    <>
      <Header />
      <hr />
      <div className='header'>
        <h2>Viagens</h2>
        <p>Clique nas viagens para se escrever</p>
      </div>
      <div className='container-card'>
        {isLoading && <img src="https://cdn.hotware.com.tw/v_comm/global/images/loading.gif" alt="loading" /> }
        {!isLoading && error && <p>Ocorreu um Erro</p>}
        {!isLoading && trips && trips.length > 0 && <CardsTrips/> }
        {!isLoading && trips && trips.length === 0 && (
          <p>Não temos nenhuma viagem</p>
        )}
      </div>
    </>
  )
}