import React from 'react';
import './App.css';
import CardGrande from '../components/CardGrande/CardGrande';
import CardPequeno from '../components/CardPequeno/CardPequeno';
import ImagemButton from '../components/ImagemButton/ImagemButton';
import arrowDown from '../img/arrowdown.png'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem="https://avatars.githubusercontent.com/u/66390420?v=4"
          nome="Lucas Gomes"
          descricao="Oi, eu sou o Lucas Gomes. Sou aluno da Labenu."
        />

        <ImagemButton
          imagem={arrowDown}
          texto="Ver mais"
        />

        <CardPequeno
          imagem="https://imagensemoldes.com.br/wp-content/uploads/2020/05/Ilustra%C3%A7%C3%A3o-Email-PNG.png"
          dados="Email:"
          descricao="lucasgomesbr@gmail.com"
        />
        <CardPequeno
          imagem="http://redestarsupermercados.com.br/static/imagens/address.png"
          dados="Endereço:"
          descricao="Rua Lucas Gomes, 01"
        />
      </div>

      <div className="page-section-container">
        <h2>Estudos</h2>
        <CardGrande
          imagem="https://png.pngtree.com/png-vector/20190301/ourlarge/pngtree-programming-and-web-technology-vector-with-computer-illustration-png-image_755051.jpg"
          nome="Full Stack"
          descricao="Se desenvolvendo para o mercado de trabalho!"
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <div className="midias-sociais">
          <ImagemButton
            imagem="https://www.freepnglogos.com/uploads/linkedin-logo-design-30.png"
            texto="Linkedin"
          />

          <ImagemButton
            imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
            texto="Twitter"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
