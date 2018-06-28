import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import React from 'react';
import imageFB from 'imageFB.jpg';

class ProfilePicture extends React.Component {
    render() {
      return (
        <div className='image'>
          <img src={this.props.img} />
        </div>
      );
    }
}

class Title extends React.Component {
  render() {
    return (
      <div className='title'>
        {this.props.name}{this.props.school}
      </div>
    );
  }
}

class Description extends React.Component {
  render() {
    return (
      <div className='description'>
        {this.props.content}
      </div>
    );
  }
}

class SimpleCard extends React.Component {
  render() {
    return (
      <div className='simple-card'>
        <ProfilePicture 
          img={imageFB.jpg}
        />
       <Title 
          name={'Miguel Angel'} 
           school='FIME'
        />
        <Description 
          content='This is some kind of content'
        />
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      </div>
      <div>
        <SimpleCard />  
      </div>
    );
  }
}

export default App;
