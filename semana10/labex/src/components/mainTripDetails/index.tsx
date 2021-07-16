import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useHistory } from 'react-router-dom';
import { useDateFix } from '../../hoohs/useDateFixed';
import { apiLabex } from '../../services/api';
import { ButtonDenied, ButtonPrimary, ButtonSuccess } from '../button';
import { CardsCandidates } from '../cardsCandidates';

import './styles.scss'

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
  const newDate = useDateFix(props.date)
  const [ renderApproved, setRenderApproved ] = useState(false)
  
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
      <div className='header-cards-candidates'>
        <h2>{props.name}</h2>
        <div>
          <ButtonPrimary onClick={() => history.push('/admin')}>Voltar</ButtonPrimary>
        </div>
      </div>
      <div className='container-cards-candidates'>
        <div className='card-planet'>
          <div className='image'>
            <img src={props.planet} alt={props.name} />
          </div>
          <div className='info-planet'>
            <p><span>Descrição: </span>{props.description}</p>
            <p><span>Duração: </span>{props.durationInDays}</p>
            <p><span>Data: </span>{newDate}</p>
          </div>
        </div>
        <div className='header-cards-candidates'>
          <h3>{renderApproved ? 'Candidatos Aprovados' : 'Candidatos Pendentes'}</h3>
          <div>
            <button className='render-button' onClick={() => setRenderApproved(!renderApproved)}>{renderApproved ? 'Pendentes' : 'Aprovados'}</button>
          </div>
        </div>
        {!renderApproved ? (
          <>
            {props.candidates?.length > 0 ? (
              props.candidates.map(({age, applicationText, country, id, name, profession}) => {
                return (
                  <div className='cards-candidates'>
                    <div className='center'>
                      <CardsCandidates
                        key={id}
                        name={name}
                        age={age}
                        applicationText={applicationText}
                        profession={profession}
                        country={country}
                      />
                      <div className='buttons-candidates'>
                        <ButtonSuccess onClick={() => approveCandidate(id, name, true)}>Aprovar</ButtonSuccess>
                        <ButtonDenied onClick={() => approveCandidate(id, name, false)}>Desaprovar</ButtonDenied>
                      </div>
                    </div>
                  </div>
                )
              })
            ) : (
              <div className='cards-candidates'>
                <p>Não há candidatos pendentes</p>
              </div>
            )}
          </>
        ) : (
          <>
            {props.approved?.length > 0 ? (
              props.approved.map(({age, applicationText, country, id, name, profession}) => {
                return (
                  <div className='cards-candidates'>
                    <CardsCandidates
                      key={id}
                      name={name}
                      age={age}
                      applicationText={applicationText}
                      profession={profession}
                      country={country}
                    />
                  </div>
                )
              })
            ) : (
              <div className='cards-candidates'>
                <p>Não há candidatos aprovados</p>
              </div>
            )}
          </>
        )}
      </div>
    </>
  )
}