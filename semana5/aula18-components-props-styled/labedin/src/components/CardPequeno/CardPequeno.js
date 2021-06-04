import React from 'react';
import { SmallCardContainer, Image, ContainerText, Dados } from './Styled'

function CardPequeno(props) {
  return (
    <SmallCardContainer>
      <Image src={props.imagem} />
      <ContainerText>
        <Dados>{props.dados}</Dados>
        <p>{props.descricao}</p>
      </ContainerText>
    </SmallCardContainer>
  )
}

export default CardPequeno;