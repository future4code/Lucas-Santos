import React from "react";
import CreateUsers from '../components/createUsers/CreateUsers'
import PageList from '../components/pageList/PageLits'

import {
  GlobalStyle
} from './styled'

class App extends React.Component {
  state = {
    page: 'createUsers'
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
        return <PageList changePage={this.changePage}/>
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
