import { Header } from '../../components/header';

import './styles.scss'

export const About = () => {
  return (
    <>
      <Header/>
      <div className='container'>
        <div className='section'>
          <div className='text'>
            <h2>QUEM SOMOS</h2>
            <hr />
            <h3>
              Uma rede de familiares e profissionais de viagens espaciais, que se uniu com o propósito de proporcionar as pessoas experiências únicas em suas vidas.
            </h3>
            <p>
              “Tudo começou em 2002, época em que não havia uma legislação que estabelecesse normas de segurança no turismo e sequer se falava sobre o assunto na imprensa. Esse silêncio me transtornou. No dia 24 de julho daquele ano, ocorreu a festa de inauguração da Associação Férias Vivas. Foram inúmeras ações e muitas parcerias para a criação de normas técnicas, estudo de acidentes e conscientização. Foi o começo de uma nova vida para mim.” Lucas Gomes – CEO Labex.com
            </p>
          </div>
          <div className='image'>
            <img src="https://ak.picdn.net/shutterstock/videos/6985603/thumb/1.jpg" alt="empresa" />
          </div>
        </div>
        <div className='section'>
          <div className='image'>
            <img src="https://i.imgur.com/0mYh6Hn.png" alt="viagem" />
          </div>
          <div className='text'>
            <h2>INFORMAÇÃO SALVA VIDAS</h2>
            <hr />
            <p>
              A Empresa Labex criou um portfólio de ações voltadas para a disseminação do turismo consciente. Aqui no site da ONG é disponibilizada uma biblioteca dedicada ao tema, com dicas de prevenção e segurança, artigos de gerenciamento de risco, análises sobre a legislação vigente, assim como orientações jurídicas para as famílias vítimas de acidentes.
            </p>
            <p>
              Recentemente, lançamos o aplicativo Eu Vivi Esta Experiência, uma ferramenta colaborativa que melhora a experiência dos turistas nas viagens e contribui para o aumento da segurança das atividades turísticas.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}