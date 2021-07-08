import { Link, useHistory } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa'
import { ButtonDenied, ButtonPrimary } from '../../components/button';
import { Header } from '../../components/header';

import './styles.scss'

export const Admin = () => {
  const history = useHistory()

  return (
    <>
      <Header />
      <hr />
      <div className='header'>
        <h2>Painel Administrativo</h2>
        <div>
          <ButtonPrimary onClick={() => history.push('/admin/createtrip')}>Criar Viagem</ButtonPrimary>
          <ButtonDenied title='Deslogar' onClick={() => history.push('/')}>Sair</ButtonDenied>
        </div>
      </div>
      <div className='cards-container'>
        <div className='cards'>
          <Link to='/admin/trip1'>Viagem 1</Link>
          <span><FaTrash/></span>
        </div>
        <div className='cards'>
          <Link to='/admin/trip2'>Viagem 2</Link>
          <span><FaTrash/></span>
        </div>
        <div className='cards'>
          <Link to='/admin/trip3'>Viagem 3</Link>
          <span><FaTrash/></span>
        </div>
      </div>
    </>
  )
}