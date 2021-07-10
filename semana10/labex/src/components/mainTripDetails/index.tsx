import { toast } from 'react-hot-toast';
import { useHistory } from 'react-router-dom';
import { apiLabex } from '../../services/api';
import { ButtonDenied, ButtonPrimary, ButtonSuccess } from '../button';

type TripListDetailsProps = {
  id: string,
  planet: string,
  durationInDays: number,
  date: string,
  name: string,
  description: string,
  approved: [{
    id: string,
    applicationText: string,
    profession: string,
    age: number,
    name: string,
    country: string
  }],
  candidates: [{
    id: string,
    applicationText: string,
    profession: string,
    age: number,
    name: string,
    country: string
  }]
}

export const MainTripDetails = (props: TripListDetailsProps) => {
  const history = useHistory()
  
  const approveCandidate = async (candidateId: string, candidateName: string, approve: boolean) => {
    const token = localStorage.getItem('token')
    const endPoint = `trips/${props.id}/candidates/${candidateId}/decide`

    try {
      await apiLabex.put(endPoint, {approve: approve}, { headers: { auth: token }})
      approve === true ? toast.success(`Candidato ${candidateName} aprovado`) : toast.error(`Candidato ${candidateName} reprovado`);
      window.location.reload()
    } catch (err) {
      toast.error(`Error ao aprovar o ${candidateName}`);
    }
  }

  return (
    <>
      <div className='header'>
        <h2>{props.name}</h2>
        <div>
          <ButtonPrimary onClick={() => history.push('/admin')}>Voltar</ButtonPrimary>
        </div>
      </div>
      <div className='cards-container'>
        <div className='cards'>
          <p><span>Descrição: </span>{props.description}</p>
          <p><span>Planeta: </span>{props.planet}</p>
          <p><span>Duração: </span>{props.durationInDays}</p>
          <p><span>Data: </span>{props.date}</p>
        </div>
        <hr className='linha'/>
        <div className='cards'>
          <h3>Candidatos Pendentes</h3>
          {props.candidates?.length > 0 ? (
            props.candidates.map(({age, applicationText, country, id, name, profession}) => {
              return (
                <>
                  <div key={id}>
                    <p><span>Nome: </span>{name}</p>
                    <p><span>Idade: </span>{age}</p>
                    <p><span>Profissão: </span>{profession}</p>
                    <p><span>País: </span>{country}</p>
                    <p><span>Descrição: </span>{applicationText}</p>
                  </div>
                  <ButtonSuccess onClick={() => approveCandidate(id, name, true)}>Aprovar</ButtonSuccess>
                  <ButtonDenied onClick={() => approveCandidate(id, name, false)}>Desaprovar</ButtonDenied>
                </>
              )
            })
          ) : (
            <p>Não há candidatos pendentes</p>
          )}
        </div>
        <hr className='linha'/>
        <div className='cards'>
          <h3>Candidatos Aprovados</h3>
          {props.approved?.length > 0 ? (
            props.approved.map(({age, applicationText, country, id, name, profession}) => {
              return (
                <div key={id}>
                  <p><span>Nome: </span>{name}</p>
                  <p><span>Idade: </span>{age}</p>
                  <p><span>Profissão: </span>{profession}</p>
                  <p><span>País: </span>{country}</p>
                  <p><span>Descrição: </span>{applicationText}</p>
                </div>
              )
            })
          ) : (
            <p>Não há candidatos aprovados</p>
          )}
        </div>
      </div>
    </>
  )
}