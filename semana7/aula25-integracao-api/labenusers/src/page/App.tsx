import React from "react";
import CreateUsers from '../components/createUsers/CreateUsers'
import UsersList from '../components/usersList/UsersList'
import api from '../services/api'

import {
  GlobalStyle,
  ContainerUserList,
  UserList,
  ButtonUserList
} from './styled'


class App extends React.Component {
  state = {
    users: [],
    page: 'createUsers'
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

  changePage = () => {
    if (this.state.page === 'createUsers') {
      this.setState({ page: 'userList' })
    } else if (this.state.page === 'userList') {
      this.setState({ page: 'createUsers' })
    }
  }

  render() {
    const renderPage = () => {
      if (this.state.page === 'createUsers') {
        return <CreateUsers changePage={this.changePage}/>
        
      } else if (this.state.page === 'userList') {
        return (
          <ContainerUserList>
            <ButtonUserList
              onClick={this.changePage}
            >
              Criar Usuários
            </ButtonUserList>
            <UserList>
              <h1>Lista de Usuários</h1>
              {this.state.users.map(({ id, name, email }) => {
                return (
                  <UsersList 
                    key={id}
                    id={id}
                    name={name}
                    email={email}
                    showList={this.showUsersList}
                  />
                )
              })}
            </UserList>
          </ContainerUserList>
        )
      }
    }    

    return (
      <GlobalStyle>
        {renderPage()}
      </GlobalStyle>
    )
  }
}

export default App;
