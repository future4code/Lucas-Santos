import { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { apiLabex } from '../../services/api';
import { Header } from '../../components/header';
import { ButtonSuccess } from '../../components/button';

export const CreateTrip = () => {
  const history = useHistory()
  const [ form, setForm ] = useState({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: 0
  })

  const createTrip = async (e: FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem('token')

    try {
      await apiLabex.post('trips', form, { headers: { auth: token }})
      toast.success(`Viagem (${form.name}) cadastrada`);
      history.push('/admin')
    } catch (err) {
      console.log(err)
      toast.error(`Error ao cadastrar a viagem`);
    }
    console.log(form)
  }

  return (
    <div>
      <Header />
      <br /><br />
      <h1>Criar Viagem</h1>
      <form onSubmit={createTrip}>
        <input
          name='name'
          value={form.name}
          onChange={(e) => setForm({...form, [e.target.name]: e.target.value})}
          placeholder='Nome'
          required
        />
        <input
          name='planet'
          value={form.planet}
          onChange={(e) => setForm({...form, [e.target.name]: e.target.value})}
          placeholder='Link da imagem do Planeta'
          pattern='https?:\/\/.*\.(?:png|jpg|jpeg)'
          title='Imagem .png (https://www.example.com.br/image.png)'
          required
        />
        <input
          name='date'
          value={form.date}
          type="date"
          onChange={(e) => setForm({...form, [e.target.name]: e.target.value})}
          placeholder='Data'
          required
        />
        <textarea
          name='description'
          value={form.description}
          onChange={(e) => setForm({...form, [e.target.name]: e.target.value})}
          placeholder='Descrição'
          required
        />
        <input
          name='durationInDays'
          type="number"
          onChange={(e) => setForm({...form, [e.target.name]: Number(e.target.value)})}
          placeholder='Duração em dias'
          required
        />
        <ButtonSuccess>Criar</ButtonSuccess>
      </form>
    </div>
  )
}