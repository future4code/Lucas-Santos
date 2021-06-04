import React from 'react';
import { BigcardContainer, Image, ContainerText, Nome } from './Styled'

function CardGrande(props) {
  return (
    <BigcardContainer>
      <Image src={props.imagem} />
      <ContainerText>
        <Nome>{props.nome}</Nome>
        <p>{props.descricao}</p>
      </ContainerText>
    </BigcardContainer>
  )
}

export default CardGrande;