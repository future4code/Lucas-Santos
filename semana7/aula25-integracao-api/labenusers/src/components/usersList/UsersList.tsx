import React from "react";
import api from '../../services/api'
import { Container, Button } from './styled'

type UserListProps = {
  name: string,
  email: string,
  id: string,
  showList: Function
}

class UsersList extends React.Component<UserListProps> {
  deleteUser = (id: string) => {
    api.delete(id).then(() => {
      alert(`${this.props.name} deletado`)
      this.props.showList()
    }).catch((err) => {
      alert(err)
    })
  }  

  render() {
    return (
      <Container>
        <p><span>Nome:</span> {this.props.name}</p>
        <Button
          onClick={() => this.deleteUser(this.props.id)}
        >
          <img src="https://i.imgur.com/TUt7tzu.png" alt="lixeira" />
        </Button>
      </Container>
    );
  }
}

export default UsersList