import house from '../assets/img/nav/house.png'
import navigation from '../assets/img/nav/navigation.png'
import subscribe from '../assets/img/nav/subscribe.png'

import '../assets/styles/components/Navigation.css';

const Navigation = () => {
  return (
    <div className="Navigation">
      <div title="Início" className="inicio">
        <img src={house} alt="house"/>
        <h2>Início</h2>
      </div>
      <div title="Explorar" className="explorar">
        <img src={navigation} alt="navigation"/>
        <h2>Explorar</h2>
      </div>
      <div title="Inscrições" className="incricoes">
        <img src={subscribe} alt="subscribe"/>
        <h2>Inscrições</h2>
      </div>
    </div>
  );
}

export default Navigation;