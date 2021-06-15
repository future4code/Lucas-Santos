import React from "react";
import api from '../../services/api'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 20vw;
  margin-top: 1%;

  span {
    font-weight: 500;
  }

  button {
    border: none;
    height: 20px;
    cursor: pointer;
    
    img {
      border-radius: 10%;
      height: 100%;
    }
  }
`

type UserListProps = {
  name: string,
  email: string,
  id: string
}

class UsersList extends React.Component<UserListProps> {
  state = {
    deleteID: ''
  }

  captureID = () => {
    this.setState({ deleteID: this.props.id})
    this.deleteUser()
    console.log('capture', this.props.id)
  }

  componentDidUpdate = () => {
  }

  componentDidMount = () => {    
    console.log('mount:', this.state.deleteID)
  }

  deleteUser = () => {
    console.log('state ID', this.state.deleteID)
    api.delete(`${this.state.deleteID}`).then(() => {
      alert(`Usuário deletado`)
      console.log('dentro do delete', `${this.state.deleteID}`)
    }).catch((err) => {
      alert(err)
      console.log('deu erro')
    })
  }  

  render() {
    console.log('render:', this.state.deleteID)
    return (
      <Container>
        <p><span>Nome:</span> {this.props.name}</p>
        <button
          onClick={this.captureID}
        >
          <img src="https://i.imgur.com/TUt7tzu.png" alt="lixeira" />
        </button>
      </Container>
    );
  }
}

export default UsersList