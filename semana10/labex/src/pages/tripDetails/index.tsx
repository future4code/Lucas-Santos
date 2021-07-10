import { useParams } from 'react-router-dom';
import { useRequestGetTripDetails } from '../../hooks/useResquestData';
import { Header } from '../../components/header';
import { MainTripDetails } from '../../components/mainTripDetails';

type ParamsType = {
  tripdetailsid: string
}

export const TripDetails = () => {
  const { tripdetailsid } = useParams<ParamsType>();
  const [ trips, isLoading, error ]: any[] = useRequestGetTripDetails(tripdetailsid)

  return (
    <div>
      <Header />
      <hr />
      {isLoading && <img src="https://cdn.hotware.com.tw/v_comm/global/images/loading.gif" alt="loading" />}
      {!isLoading && error && <p>Ocorreu um Erro</p>}
      {!isLoading && trips && (
        <MainTripDetails
          id={trips.id}
          planet={trips.planet}
          durationInDays={trips.durationInDays}
          date={trips.date}
          name={trips.name}
          description={trips.description}
          approved={trips.approved}
          candidates={trips.candidates}
        />
      )}
      {!isLoading && !trips && (
        <p>Nenhuma viagem cadastrada</p>
      )}
    </div>
  )
}