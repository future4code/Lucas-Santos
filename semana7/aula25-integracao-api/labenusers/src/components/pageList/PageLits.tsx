import React from "react";
import UsersList from '../../components/usersList/UsersList'
import UserPerfil from '../userPerfil/UserPerfil'
import api from '../../services/api'

import {
  Container,
  List,
  Button
} from './styled'

type PageListProps = {
  changePage: Function
}

class App extends React.Component<PageListProps> {
  state = {
    users: [],
    name: '',
    email: '',
    page: 'list'
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

  showUser = (id: string) => {
    api.get(id).then((res) => {
      this.setState({ name: res.data.name })
      this.setState({ email: res.data.email })
    }).catch(() => {
      alert('Usuário não encontrado')
    })
  }

  changeRender = () => {
    if (this.state.page === 'list') {
      this.setState({ page: 'user' })
    } else if (this.state.page === 'user') {
      this.setState({ page: 'list' })
    }
  }

  render() {
    const renderPage = () => {
      if (this.state.page === 'list') {
        return (
          <>
            <Button
              onClick={() => this.props.changePage()}
            >
              Criar Usuários
            </Button>
            <List>
              <div>✅ = entrar no usuário | ❌ = excluir usuário</div>
              <h1>Lista de Usuários</h1>
              {this.state.users.map(({ id, name, email }) => {
                return (
                  <UsersList 
                    key={id}
                    id={id}
                    name={name}
                    email={email}
                    showList={this.showUsersList}
                    showUser={this.showUser}
                    changeRender={this.changeRender}
                  />
                )
              })}
            </List>
          </>
        )
      } else if (this.state.page === 'user') {
        return (
          <UserPerfil
            changeRender={this.changeRender}
            name={this.state.name}
            email={this.state.email}
          />
        )
      }
    } 

    return (
      <Container>
        {renderPage()}
      </Container>
    )
  }
}

export default App;
