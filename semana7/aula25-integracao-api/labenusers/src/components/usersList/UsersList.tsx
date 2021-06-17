import React from "react";
import api from '../../services/api'
import { Container, Users, Button } from './styled'

type UserListProps = {
  name: string,
  email: string,
  id: string,
  showList: Function,
  showUser: Function,
  changeRender: Function
}

class UsersList extends React.Component<UserListProps> {
  deleteUser = (id: string) => {
    if (window.confirm(`Tem certeza de que deseja deletar o ${this.props.name}?`)) {
      api.delete(id).then(() => {
        alert(`${this.props.name} deletado`)
        this.props.showList()
      }).catch((err) => {
        alert(err)
      })
    } else {
      console.log('usuário não foi deletado')
    }
  }

  clickButton = () => {
    this.props.showUser(this.props.id)
    this.props.changeRender()
  }

  render() {
    return (
      <Container>
        <Users>
          <Button
            onClick={this.clickButton}
            title='Entrar no usuário'
          >
            ✅
          </Button>
          <p><span>Nome:</span> {this.props.name}</p>
        </Users>
        <Button
          onClick={() => this.deleteUser(this.props.id)}
          title='Excluir usuário'
        >
          ❌
        </Button>
      </Container>
    )
  }
}

export default UsersList