import { CardsTrips } from '../../components/CardsTrips';
import { Footer } from '../../components/footer';
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
  const [trips, isLoading, error]: any[] = useRequestGetTrip()

  return (
    <>
      <Header />
      <hr />
      <div className='header-list'>
        <h2>Viagens</h2>
        <p>Clique nas viagens para se escrever</p>
      </div>
      <div className='container-card'>
        {isLoading && <img src="https://cdn.hotware.com.tw/v_comm/global/images/loading.gif" alt="loading" /> }
        {!isLoading && error && <p>Ocorreu um Erro</p>}
        {!isLoading && trips && trips.length > 0 && (
          trips.map(({id, name, description, planet, durationInDays, date}: TripListType) => {
            return (
              <CardsTrips
                key={id}
                id={id}
                name={name}
                description={description}
                planet={planet}
                durationInDays={durationInDays}
                date={date}
              />
            )
          })
        )}
        {!isLoading && trips && trips.length === 0 && (
          <p>Não temos nenhuma viagem</p>
        )}
      </div>
      <Footer />
    </>
  )
}