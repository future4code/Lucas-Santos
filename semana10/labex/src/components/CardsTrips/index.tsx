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
  const fixDate = (number: any) => { return number <= 9 ? '0' + number : number }

  return (
    <>
      {trips && trips.map(({id, name, description, planet, durationInDays, date}: TripListType) => {
        const newDate = new Date(date)
        const dateFixed = ((fixDate(newDate.getDate()+1).toString()) + "/" + (fixDate(newDate.getMonth()+1).toString()) + "/" + newDate.getFullYear())
        return (
          <>
            <Link to={`/trips/${id}/${name}`} key={id} className='card'>
              <img src={planet} alt={name} />
              <div>
                <p><span>Nome: </span>{name}</p>
                <hr className='line-card' />
                <p><span>Descrição: </span>{description}</p>
                <hr className='line-card' />
                <p><span>Duração: </span>{durationInDays} dias</p>
                <hr className='line-card' />
                <p><span>Data: </span>{dateFixed}</p>
              </div>
            </Link>
          </>
        )
      })}
    </>
  )
}