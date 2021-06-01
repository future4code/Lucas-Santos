import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Main from '../components/Main';
import Footer from '../components/Footer';

import '../assets/styles/pages/App.css';
import '../assets/styles/global.css';

function App() {
  return (
    <div className="App">      
      <Header/>
      <div className="container">
        <Navigation/>
        <Main/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
