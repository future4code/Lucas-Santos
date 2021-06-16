import React from "react";

import {
  Container,
  Header,
  User,
  Button
} from './styled'

type UserPerfilProps = {
  name: string,
  email: string,
  changeRender: Function
}

class UserPerfil extends React.Component<UserPerfilProps> {
  render() {
    return (
      <Container>
        <Header>
          <h1>Usuário</h1>
          <Button
            onClick={() => this.props.changeRender()}
          >Voltar</Button>
        </Header>
        <User>
          <span>Nome:</span>
          <p>{this.props.name}</p>
        </User>
        <User>
          <span>Email:</span>
          <p>{this.props.email}</p>
        </User>
      </Container>
    )
  }
}

export default UserPerfil