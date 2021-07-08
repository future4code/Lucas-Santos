import { useHistory } from 'react-router-dom';
import { ButtonPrimary } from '../../components/button';
import { CardsTrips } from '../../components/CardsTrips';
import { Header } from '../../components/header';
import { useRequestGetTrip } from '../../hooks/useResquestData';

import './styles.scss'

type TripListType = {
  id: string,
  name: string,
  description: string,
  planet: string,
  durationInDays: number,
  date: string
}

export const ListTrips = () => {
  const history = useHistory();
  const [trips, isLoading, error]: any[] = useRequestGetTrip()

  const tripsList = trips && trips.map(({id, name, description, planet, durationInDays, date}: TripListType) => {
    return (
      <div key={id}>
        <p><span>Nome: </span>{name}</p>
        <p><span>Descrição: </span>{description}</p>
        <p><span>Planeta: </span>{planet}</p>
        <p><span>Duração: </span>{durationInDays}</p>
        <p><span>Data: </span>{date}</p>
      </div>
    )
  })

  return (
    <>
      <Header />
      <hr />
      <div className='header'>
        <h2>Viagens</h2>
        <ButtonPrimary onClick={() => history.push('/trips/subscribe')}>Inscrever-se</ButtonPrimary>
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