import { Link } from 'react-router-dom';
import { useDateFix } from '../../hoohs/useDateFixed';

import './styles.scss'

type TripListProps = {
  id: string,
  name: string,
  description: string,
  planet: string,
  durationInDays: number,
  date: string
}

export const CardsTrips = (props: TripListProps) => {
  const newDate = useDateFix(props.date)

  return (
    <Link to={`/trips/${props.id}/${props.name}`} className='card'>
      <img src={props.planet} alt={props.name} />
      <div>
        <p><span>Nome: </span>{props.name}</p>
        <hr className='line-card' />
        <p><span>Descrição: </span>{props.description}</p>
        <hr className='line-card' />
        <p><span>Duração: </span>{props.durationInDays} dias</p>
        <hr className='line-card' />
        <p><span>Data: </span>{newDate}</p>
      </div>
    </Link>
  )
}