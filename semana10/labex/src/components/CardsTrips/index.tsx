import { Link } from 'react-router-dom';
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

export const CardsTrips = () => {
  const [trips]: any[] = useRequestGetTrip()

  return (
    <>
      {trips && trips.map(({id, name, description, planet, durationInDays, date}: TripListType) => {
        return (
          <Link to={`/trips/${id}/${name}`} key={id} className='card'>
            <img src={planet} alt={name} />
            <div>
              <p><span>Nome: </span>{name}</p>
              <p><span>Descrição: </span>{description}</p>
              <p><span>Duração: </span>{durationInDays}</p>
              <p><span>Data: </span>{date}</p>
            </div>
          </Link>
        )
      })}
    </>
  )
}