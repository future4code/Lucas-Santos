import { Link } from 'react-router-dom';
import { FaTwitter, FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa';

import './styles.scss'

export const Header = () => {
  return (
    <div className='containerHeader'>
      <div className='top'>
        <p>Tire suas dúvidas | contato@labex.com.br ou (00) 0000.0000</p>
        <div>
          <a className='social-media' target='_blank' href='https://www.instagram.com/' title='Instagram'><FaInstagram/></a>
          <a className='social-media' target='_blank' href='https://www.facebook.com/' title='Facebook'><FaFacebookF/></a>
          <a className='social-media' target='_blank' href='https://www.twitter.com/' title='Twitter'><FaTwitter/></a>
          <a className='social-media' target='_blank' href='https://www.youtube.com/' title='Youtube'><FaYoutube/></a>
        </div>
      </div>
      <div className='menu'>
        <div className='logo'>
          <img src="https://i.imgur.com/7SFTxPW.png" alt="Labex" />
          <h1>Labex<span className='teste'>.com</span></h1>
        </div>
        <div className='menu-links'>
          <Link to='/' title='Home'>Home</Link>
          <Link to='/trips' title='Viagens'>Viagens</Link>
          <Link to='/about' title='Sobre nós'>A Empresa</Link>
          <Link to='/admin' title='Painel Admnistrativo'>Painel do Admin</Link>
        </div>
      </div>
    </div>
  )
}