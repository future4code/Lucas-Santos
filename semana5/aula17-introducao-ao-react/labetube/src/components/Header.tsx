import logo from '../assets/img/youtube.svg'
import search from '../assets/img/header/search/search.svg'
import microfone from '../assets/img/header/search/microfone.png'
import create from '../assets/img/header/img-settings/create.png'
import apps from '../assets/img/header/img-settings/apps.png'
import notification from '../assets/img/header/img-settings/notification.png'
import user from '../assets/img/header/img-settings/user.jpg'

import '../assets/styles/components/Header.css';

const Header = () => {
  return (
    <div className="Header">
      <div className="logo">
        <img src={logo} alt="icon"/>
        <div title="Página Inicial do LabeTube" className="slogan">
          <h1>LabeTube</h1>
          <span>BR</span>
        </div>
      </div>
      <div className="search">
        <div className="field-search">
          <input placeholder="Pesquisar" type="text"/>
          <div className="button-search" title="Pesquisar">
            <img src={search} alt="search"/>
          </div>
        </div>
        <img className="microfone" title="Pesquisar com sua voz" src={microfone} alt="microfone"/>
      </div>
      <div className="settings">
        <img title="Criar" src={create} alt="create"/>
        <img title="Apps do Labetube" src={apps} alt="apps"/>
        <img title="Notificações" src={notification} alt="notification"/>
        <img className="img-user" src={user} alt="user"/>
      </div>
    </div>
  );
}

export default Header;