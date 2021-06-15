import React from "react";
import CreateUsers from '../components/createUsers/CreateUsers'
import UsersList from '../components/usersList/UsersList'
import api from '../services/api'

import './App.css'

class App extends React.Component {
  state = {
    users: [],
    inputName: '',
    inputEmail: ''
  }

  componentDidMount = () => {
    this.showUsersList();
  }

  showUsersList = () => {
    api.get('/').then((res) => {
      this.setState({ users: res.data })
    }).catch((err) => {
      alert(err)
    })
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
      this.showUsersList()
    }).catch(() => {
      alert('Erro no cadastro! :(')
    })
  }

  onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputName: e.target.value })
  }
  
  onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputEmail: e.target.value })
  }

  render() {
    const Users = this.state.users.map(({ id, name, email }) => {
      return (
        <>
          <UsersList 
            key={id}
            id={id}
            name={name}
            email={email}
          />
        </>
      )
    })

    return (
      <div className='App'>
        <CreateUsers
          inputName={this.state.inputName}
          inputEmail={this.state.inputEmail}
          onChangeName={this.onChangeName}
          onChangeEmail={this.onChangeEmail}
          createUser={this.createUser}
        />
        <h1>Lista de Usuários</h1>
        {Users}
      </div>
    );
  }
}

export default App;
