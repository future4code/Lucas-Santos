import labevideos from '../labetube-videos.json'

import '../assets/styles/components/Main.css';

const Main = () => {
  const reproduzVideo = () => {
    alert("O vídeo está sendo reproduzido")
  }

  return (
    <div className="Main">
      <div onClick={reproduzVideo}>
        <video src={labevideos.video1.link}></video>
        <h3>{labevideos.video1.title}</h3>
        <p>{labevideos.video1.description}</p>
      </div>
      <div onClick={reproduzVideo}>
        <video src={labevideos.video2.link}></video>
        <h3>{labevideos.video2.title}</h3>
        <p>{labevideos.video2.description}</p>
      </div>
      <div onClick={reproduzVideo}>
        <video src={labevideos.video3.link}></video>
        <h3>{labevideos.video3.title}</h3>
        <p>{labevideos.video3.description}</p>
      </div>
      <div onClick={reproduzVideo}>
        <video src={labevideos.video4.link}></video>
        <h3>{labevideos.video4.title}</h3>
        <p>{labevideos.video4.description}</p>
      </div>
      <div onClick={reproduzVideo}>
        <video src={labevideos.video5.link}></video>
        <h3>{labevideos.video5.title}</h3>
        <p>{labevideos.video5.description}</p>
      </div>
      <div onClick={reproduzVideo}>
        <video src={labevideos.video6.link}></video>
        <h3>{labevideos.video6.title}</h3>
        <p>{labevideos.video6.description}</p>
      </div>
      <div onClick={reproduzVideo}>
        <video src={labevideos.video7.link}></video>
        <h3>{labevideos.video7.title}</h3>
        <p>{labevideos.video7.description}</p>
      </div>
      <div onClick={reproduzVideo}>
        <video src={labevideos.video8.link}></video>
        <h3>{labevideos.video8.title}</h3>
        <p>{labevideos.video8.description}</p>
      </div>
      <div onClick={reproduzVideo}>
        <video src={labevideos.video9.link}></video>
        <h3>{labevideos.video9.title}</h3>
        <p>{labevideos.video9.description}</p>
      </div>
      <div onClick={reproduzVideo}>
        <video src={labevideos.video10.link}></video>
        <h3>{labevideos.video10.title}</h3>
        <p>{labevideos.video10.description}</p>
      </div>
    </div>
  );
}

export default Main;