import React from "react";
import { Container, Main } from './styled'
import api from '../../services/api'

type CreateUsersProps = {
  changePage: Function
}

class CreateUsers extends React.Component<CreateUsersProps> {
  state = {
    inputName: '',
    inputEmail: ''
  }

  createUser = () => {
    api.post('/', {
      name: this.state.inputName,
      email: this.state.inputEmail
    }).then(() => {
      alert('Usuário Cadastrado! :)')
      this.setState({
        inputName: '',
        inputEmail: ''
      })
    }).catch(() => {
      alert('Erro no cadastro! :(')
    })
  }

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
              value={this.state.inputName}
              onChange={(e) => {this.setState({ inputName: e.target.value })}}
            />
          </div>
          <div>
            <p>Email:</p>
            <input 
              value={this.state.inputEmail}
              onChange={(e) => {this.setState({ inputEmail: e.target.value })}}
            />
          </div>
          <button
            type='button'
            onClick={this.createUser}
          >
            Salvar Usuário
          </button>
        </Main>
        
      </Container>
    );
  }
}

export default CreateUsers