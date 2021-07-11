import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

import './styles.scss'

export const Footer = () => {
  return (
    <footer>
      <div className="container-footer">
        <div className='containerInfo'>
          <div className='containerItem'>
            <img src="https://i.imgur.com/7SFTxPW.png" alt="Labex.com" />
          </div>

          <div className="contactSocial">
            <div className='containerItem-contact'>
              <h2>Contato</h2>
              <div className='itemContato'>
                <p><span><AiOutlinePhone /></span>(00) 0000.0000</p>
                <p><span><AiOutlineMail /></span>contato@labex.com.br </p>
              </div>
              <div className='containerAddress'>
                <p>Rua dos bobos, nº 0 - Mirage/CS</p>
              </div>
            </div>

            <div className='containerItem'>
              <h2>Redes Sociais</h2>
              <ul className='social-media'>
                <li>
                  <a href="https://pt-br.facebook.com/" target='_blank' rel="noopener noreferrer">
                    <span><FaFacebook /></span>
                    <p>Facebook</p>
                  </a>
                </li>

                <li>
                  <a href="https://www.instagram.com/" target='_blank' rel="noopener noreferrer">
                    <span><FaInstagram /></span>
                    <p>Instagram</p>
                  </a>
                </li>

                <li>
                  <a href="https://twitter.com/" target='_blank' rel="noopener noreferrer">
                    <span><FaTwitter /></span>
                    <p>Twitter</p>
                  </a>
                </li>

                <li>
                  <a href="https://www.youtube.com/" target='_blank' rel="noopener noreferrer">
                    <span><FaYoutube /></span>
                    <p>Youtube</p>
                  </a>
                </li>

              </ul>
            </div>
          </div>
        </div>
        <hr className='line-footer' />
        <p className='text-footer'>Copyright © 2021 Labex.com | A aplicação possui um conteúdo fictício</p>
      </div>
    </footer>
  )
}