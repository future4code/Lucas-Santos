// import { useHistory } from 'react-router-dom';
import { Header } from '../../components/header';

import './styles.scss'

export const Home = () => {
  // const history = useHistory();

  return (
    <>
      <Header/>
      <div className='containerHome'>
        <div className='banner'>
          <h2>Referências em Turísmo Espaciais</h2>
          <div>
            <h3>SUA MELHOR ESCOLHA EM CONFORTO E</h3>
            <h3>SEGURANÇA EM VIAGENS ESPACIAIS</h3>
          </div>
        </div>
        <div className='main-home'>
          <div title='Mercúrio'>
            <div>
              <span>Mercúrio</span>
            </div>
          </div>
          <div title='Mercúrio'>
            <div>
              <span>Mercúrio</span>
            </div>
          </div>
          <div title='Mercúrio'>
            <div>
              <span>Mercúrio</span>
            </div>
          </div>
          <div title='Mercúrio'>
            <div>
              <span>Mercúrio</span>
            </div>
          </div>
          <div title='Mercúrio'>
            <div>
              <span>Mercúrio</span>
            </div>
          </div>
          <div title='Mercúrio'>
            <div>
              <span>Mercúrio</span>
            </div>
          </div>
          <div title='Mercúrio'>
            <div>
              <span>Mercúrio</span>
            </div>
          </div>
          <div title='Mercúrio'>
            <div>
              <span>Mercúrio</span>
            </div>
          </div>
          <div title='Mercúrio'>
            <div>
              <span>Mercúrio</span>
            </div>
          </div>
          <div title='Mercúrio'>
            <div>
              <span>Mercúrio</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}