import React from 'react';
import { ButtonContainer, Image } from './Styled'

function ImagemButton(props) {
  return (
    <ButtonContainer>
      <Image src={props.imagem} />
      <p>{props.texto}</p>
    </ButtonContainer>

  )
}

export default ImagemButton;