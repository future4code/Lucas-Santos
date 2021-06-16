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
  state = {
    deleteID: this.props.id
  }

  captureID = () => {
    this.setState({ deleteID: this.props.id})
    this.deleteUser()
  }

  componentDidUpdate = () => {
    this.props.showList()
  }

  deleteUser = () => {
    const id = `/${this.state.deleteID}`
    api.delete(id).then(() => {
      alert(`Usuário deletado`)
    }).catch((err) => {
      alert(err)
    })
  }  

  render() {
    return (
      <Container>
        <p><span>Nome:</span> {this.props.name}</p>
        <Button
          onClick={this.captureID}
        >
          <img src="https://i.imgur.com/TUt7tzu.png" alt="lixeira" />
        </Button>
      </Container>
    );
  }
}

export default UsersList