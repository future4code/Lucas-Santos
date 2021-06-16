import React from "react";
import { Container, Main } from './styled'

type CreateUsersProps = {
  inputName: string,
  inputEmail: string,
  onChangeName: React.ChangeEventHandler<HTMLInputElement>,
  onChangeEmail: React.ChangeEventHandler<HTMLInputElement>,
  createUser: React.MouseEventHandler<HTMLButtonElement>,
  changePage: Function
}

class CreateUsers extends React.Component<CreateUsersProps> {
  render() {
    return (
      <Container>
        <button
          onClick={() => this.props.changePage()}
        >
          Listar Usuários
        </button>
        <Main>
          <h1>Cadastrar Usuário</h1>
          <div>
            <p>Nome:</p>
            <input 
              value={this.props.inputName}
              onChange={this.props.onChangeName}
            />
          </div>
          <div>
            <p>Email:</p>
            <input 
              value={this.props.inputEmail}
              onChange={this.props.onChangeEmail}
            />
          </div>
          <button
            type='button'
            onClick={this.props.createUser}
          >
            Salvar Usuário
          </button>
        </Main>
        
      </Container>
    );
  }
}

export default CreateUsers