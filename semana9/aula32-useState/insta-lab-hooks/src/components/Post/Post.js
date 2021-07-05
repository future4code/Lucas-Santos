import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

const Post = (props) => {
  const [curtida, setCurtida] = useState(0)
  const [comentar, setComentar] = useState(false)
  const [post, setPost] = useState([])

  const onClickCurtida = () => {
    if(curtida === 0) {
      setCurtida(1)
    } else if (curtida === 1) {
      setCurtida(0)
    }
  };

  const onClickComentario = () => {
    if(comentar === false) {
      setComentar(true)
    } else if (comentar) {
      setComentar(false)
    }
  }

  const enviarComentario = (comentario) => {
    const novoComentario = [...post, comentario]
    setPost(novoComentario)
  }

  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'} />
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'} />

      <PostFooter>
        <IconeComContador
          icone={curtida === 0 ? iconeCoracaoBranco : iconeCoracaoPreto}
          onClickIcone={onClickCurtida}
          valorContador={curtida}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={post.length}
        />
      </PostFooter>
      {comentar
        ? <SecaoComentario enviarComentario={enviarComentario} onClickComentario={onClickComentario} />
        : <CommentContainer>{post.map((msg) => <p>{msg}</p>)}</CommentContainer>
      }
    </PostContainer>
  )
}

export default Post