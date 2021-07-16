import './styles.scss'

type CardsCandidatesProps = {
  name: string,
  age: number,
  applicationText: string,
  profession: string,
  country: string
}

export const CardsCandidates = (props: CardsCandidatesProps) => {
  return (
    <div id='cards-candidates'>
      <p><span>Nome: </span>{props.name}</p>
      <div>
        <p><span>Profissão: </span>{props.profession}</p>
        <p><span>Idade: </span>{props.age}</p>
        <p><span>País: </span>{props.country}</p>        
      </div>
      <p><span>Descrição: </span>{props.applicationText}</p>
    </div>
  )
}