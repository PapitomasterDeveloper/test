import React, { Component } from 'react';
import './App.css';
import Github from './Github';
import Header from './Components/Header';
import Auth0Lock from 'auth0-lock';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      idToken: '',
      profile: {}
    };
  }

  static defaultProps = {
    clientID: 'OFEuUVefw44CC1ngXaMvn0E9NZSYmvb6',
    domain: 'papitomaster.auth0.com'
  }

  componentWillMount(){
    this.lock = new Auth0Lock(this.props.clientID, this.props.domain);
    this.lock.on('authenticated', (authResult) => {
      // console.log(authResult);
      this.lock.getProfile(authResult.idToken, (error, profile) => {
        if(error){
          console.log(error);
            return;
        }
        console.log(profile);
      });
    });
  }

  showLock = () => {
    this.lock.show();
  }

  render() {
    return (
      <div className="App">
      <Header
        onLogin={this.showLock}
        />
        <Github />
      </div>
    );
  }
}

export default App;
