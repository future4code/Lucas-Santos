import React, { useState } from 'react'
import styled from "styled-components"

const CommentContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
`

const InputComment = styled.input`
  width: 100%;
  margin-right: 5px;
`

const Button = styled.button`
  cursor: pointer;
`

const SecaoComentario = (props) => {
  const [comentario, setComentario] = useState('')

  const esvaziarInput = () => {
    props.enviarComentario(comentario)
    props.onClickComentario()
    setComentario('')
  }

  return (
    <CommentContainer>
      <InputComment
        className={'input-comentario'}
        placeholder={'Comentário'}
        value={comentario}
        onChange={(e) => { setComentario(e.target.value) }}
      />
      <Button onClick={() => { esvaziarInput() }} >Enviar</Button>
    </CommentContainer>
  )
}


export default SecaoComentario