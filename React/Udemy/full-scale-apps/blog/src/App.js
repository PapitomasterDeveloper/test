import React, { Component } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import Container from './Container';
import './App.css';

class App extends Component {
  render() {
    return (
    <div>
      <Navbar />
      <Header />
      <Container />
      <Footer />
    </div>
    );
  }
}

export default App;
