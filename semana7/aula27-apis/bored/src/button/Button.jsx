import React from 'react';
import Button from './styled'

type ActivityProps = {
  text: string,
  showActivity: Function
}

class App extends React.Component<ActivityProps> {
  render() {
    return (
      <Button
        onClick={this.props.showActivity}
      >
        {this.props.text}
      </Button>
    );
  }
}

export default App;