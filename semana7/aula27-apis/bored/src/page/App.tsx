import React from 'react';
import api from '../service/api'
import Button from '../button/Button'
import { Main, Menu, Coaching, Footer } from './styled'
import './App.css'

class App extends React.Component {
  state = {
    msg: {
      activity: 'Choice a category!'
    }
  }

  showEducation = () => {
    api.get('?type=education').then((res) => {
      this.setState({ msg: res.data })
    }).catch((err) => {
      alert(err)
    })
  }
  showRecreational = () => {
    api.get('?type=recreational').then((res) => {
      this.setState({ msg: res.data })
    }).catch((err) => {
      alert(err)
    })
  }
  showSocial = () => {
    api.get('?type=social').then((res) => {
      this.setState({ msg: res.data })
    }).catch((err) => {
      alert(err)
    })
  }
  showCooking = () => {
    api.get('?type=cooking').then((res) => {
      this.setState({ msg: res.data })
    }).catch((err) => {
      alert(err)
    })
  }  
  showRelaxation = () => {
    api.get('?type=relaxation').then((res) => {
      this.setState({ msg: res.data })
    }).catch((err) => {
      alert(err)
    })
  }
  showBusywork = () => {
    api.get('?type=busywork').then((res) => {
      this.setState({ msg: res.data })
    }).catch((err) => {
      alert(err)
    })
  }

  render() {
    return (
      <Main>
        <Menu>
          <Button 
            showActivity={this.showEducation}
            text={'Education'}
          />
          <Button 
            showActivity={this.showRecreational}
            text={'Recreational'}
          />
          <Button 
            showActivity={this.showSocial}
            text={'Social'}
          />
          <Button 
            showActivity={this.showCooking}
            text={'Cooking'}
          />
          <Button 
            showActivity={this.showRelaxation}
            text={'Relaxation'}
          />
          <Button 
            showActivity={this.showBusywork}
            text={'Busywork'}
          />
        </Menu>
        <Coaching>
          <img src="https://i.imgur.com/h8F5yrN.png" alt="coaching" />
          <div>
            <p>{this.state.msg.activity}</p>
          </div>
        </Coaching>
        <Footer>
          <div>
            <p>Welcome!! Click on a category and Coach Boot will give you an activity!!</p>
          </div>
        </Footer>
      </Main>
    );
  }
}

export default App;