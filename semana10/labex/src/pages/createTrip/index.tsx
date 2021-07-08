// import { useHistory } from 'react-router-dom';
import { ButtonSuccess } from '../../components/button';
import { Header } from '../../components/header';

export const CreateTrip = () => {
  // const history = useHistory()

  return (
    <div>
      <Header />
      <br /><br />
      <h1>Criar Viagem</h1>
      <form>
        <input type="text" placeholder='Nome' />
        <input type="number" placeholder='Escolha um Planeta' />
        <input type="text" placeholder='Data' />
        <input type="text" placeholder='Descrição' />
        <input type="text" placeholder='Duração em dias' />
        <ButtonSuccess>Criar</ButtonSuccess>
      </form>
    </div>
  )
}