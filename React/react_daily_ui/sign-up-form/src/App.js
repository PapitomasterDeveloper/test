import React, { Component } from 'react';
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      mounted: false
    }

    // handleSumbit = () => {
    //   this.setState((prevState) => (
    //     { mounted: false }
    //     ));
    // },
    // componentDidMount = () => {
    //   this.setState((prevState) =>(
    //   { mounted: true }
    //     ));
    // }
  }
  render() {
    return(
        <div className='modal'>
          <p>cfvgbyhtg</p>
          <p>cfvgbyhtg</p>
          <p>cfvgbyhtg</p>
          <p>cfvgbyhtg</p>
        </div>
      );
    }
};

class Input extends React.Component{
  render(){
    return(<div className="Input">
      <input
        id={this.props.name}
        autoComplete={"false"}
        required
        type={this.props.type}
        placeholder={this.props.placeholder}
      />
      <label htmlFor={this.props.name}></label>
    </div>)
  }
};


export default App;
