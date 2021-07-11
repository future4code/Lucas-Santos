import { useRequestGetTrip } from '../../hooks/useResquestData';
import { Header } from '../../components/header';

import './styles.scss'
import { Footer } from '../../components/footer';

type TripListType = {
  id: string,
  name: string,
  description: string,
  planet: string,
  durationInDays: number,
  date: string
}

export const Home = () => {
  const [trips, isLoading, error]: any[] = useRequestGetTrip()

  return (
    <>
      <Header/>
      <div className='containerHome'>
        <div className='banner'>
          <h2>Referências em Turísmo Espacial</h2>
          <div>
            <h3>SUA MELHOR ESCOLHA EM CONFORTO E</h3>
            <h3>SEGURANÇA EM VIAGENS ESPACIAIS</h3>
          </div>
        </div>
        <div className='main-home'>
          {isLoading && <img src="https://cdn.hotware.com.tw/v_comm/global/images/loading.gif" alt="loading" /> }
          {!isLoading && error && <p>Ocorreu um Erro</p>}
          {!isLoading && trips && trips.length > 0 && (
            trips.map(({id, name, planet}: TripListType) => {
              return (
                <div key={id}>
                  <div className='title'>
                    <span>{name}</span>
                  </div>
                  <img src={planet} alt={name} />
                </div>
              )
            })
          )}
          {!isLoading && trips && trips.length === 0 && (
            <p>Não temos nenhuma viagem</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}