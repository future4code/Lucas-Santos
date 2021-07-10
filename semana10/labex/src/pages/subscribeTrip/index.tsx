import { FormEvent, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useHistory, useParams } from 'react-router-dom';
import { apiLabex, apiIBGE } from '../../services/api';
import { Header } from '../../components/header';
import { ButtonPrimary, ButtonSuccess } from '../../components/button';

import './styles.scss'

type ParamsType = {
  id: string,
  name: string
}

type CountryTypes = {
  nome: {
    abreviado: string
  }
}

export const SubscribeTrip = () => {
  const history = useHistory();
  const { id, name } = useParams<ParamsType>()
  const [ countrys, setCountrys] = useState<CountryTypes[]>([])
  const [ form, setForm ] = useState({
    name: "",
    age: 0,
    applicationText: "",
    profession: "",
    country: ""
  })

  useEffect(() => {
    const handleCountrys = async () => {
      try {
        const res = await apiIBGE.get('')
        setCountrys(res.data)
      } catch (err) {
        alert(err)
      }
    }

    handleCountrys()
  }, [])

  const subsribeTrip = async (e: FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem('token')
    const endpoint = `trips/${id}/apply`

    try {
      await apiLabex.post(endpoint, form, { headers: { auth: token }})
      toast.success(`${form.name} inscrito na viagem: ${name}.`);
      history.push('/trips')
    } catch (err) {
      toast.error(`Error ao inscrever-se a viagem: ${form.name}`);
    }
  }

  return (
    <div>
      <Header/>
      <hr />
      <div className='header'>
        <h2>Viagem: {name}</h2>
        <ButtonPrimary onClick={() => history.goBack()}>Voltar</ButtonPrimary>
      </div>
      <form onSubmit={subsribeTrip}>
        <input
          name='name'
          value={form.name}
          onChange={(e) => setForm({...form, [e.target.name]: e.target.value})}
          placeholder='Nome'
          required
        />
        <input
          name='age'
          type='number'
          onChange={(e) => setForm({...form, [e.target.name]: Number(e.target.value)})}
          placeholder='Idade'
          required
        />
        <input
          name='applicationText'
          value={form.applicationText}
          onChange={(e) => setForm({...form, [e.target.name]: e.target.value})}
          placeholder='Motivo da viagem'
          required
        />
        <input
          name='profession'
          value={form.profession}
          onChange={(e) => setForm({...form, [e.target.name]: e.target.value})}
          placeholder='Profissão'
          required
        />
        <select
          name='country'
          value={form.country}
          onChange={(e) => setForm({...form, [e.target.name]: e.target.value})}
          required
        >
          <option value="">Selecione</option>
          {countrys.map(({nome}) => {
            return (
              <option key={nome.abreviado} value={nome.abreviado}>
                {nome.abreviado}
              </option>
            );
          })}
        </select>
        <ButtonSuccess>Inscrecer-se</ButtonSuccess>
      </form>
    </div>
  )
}