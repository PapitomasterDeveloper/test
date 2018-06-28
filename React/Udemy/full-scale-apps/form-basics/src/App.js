import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      headerText: "Welcome to React!",
      contentText: "In this lecture, we will go over the Forms in React"
    };
  }
  render() {
    return (
      <div className="App">
        {
          /*
          <h1>{this.state.headerText}</h1>
          <p>{this.state.contentText}</p>
          */
        }
        <Header />
        <Content />
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
    );
  }
}

class Content extends Component {
  constructor(props){
    super(props);

    this.state = {
      myInputValue: "My Input"
    };
  }

myInputChanged = (e) => {
  // console.log(e);
  // console.log(e.target);
  console.log(e.target.value);
  var itemValue = e.target.value;
  this.setState({myInputValue: itemValue});
}

  render() {
    return (
      <div className="App-intro">
        <h1>Forms in React!</h1>
        <p>We will go over the Forms in React</p>
        <p>In this example, the next things we're implemented</p>
        <p>Manipulating the input element via e.target.value to extract and render the value from the input element</p>
          <p>Using the onChange and value attributes of the input element</p>
          <p>Passing the same behavior via props to a child component</p>
          <p>With checkbox, text area and other elements</p>
        <input value={this.state.myInputValue}  onChange={this.myInputChanged}/>
        <MyInputComponent 
          inputValue={this.state.myInputValue}
          myInputChanged={this.myInputChanged}/>
        <h4>{this.state.myInputValue}</h4>
        <hr />
        <EssayComponent />
        <hr />
        <FlavorComponent />
        <hr />
        <Reservation />
      </div>
    );
  }
}

class MyInputComponent extends Component {
  constructor(props){
    super(props);

    this.state = {

    };
  }

  render(){
    return(
      <div className="App">
        <input value={this.props.myInputValue}  onChange={this.props.myInputChanged}/>
      </div>
    );
  }
}

class EssayComponent extends Component {
  constructor(props){
    super(props);

    this.state = {
      value: 'Once upon a time...'
    };
  }

  handleChange = (e) => {
    this.setState({value: e.target.value});
  }

  handleSubmit = (e) => {
    alert(this.state.value);
    e.preventDefault();
  }

    render(){
      return(
        <form onSubmit={this.handleSubmit}>
          <textArea value={this.state.value} onChange={this.handleChange}/>
          <h4>{this.state.value}</h4>
          <button type="submit">Submit</button>
        </form>
      );    
    }
  }

  class FlavorComponent extends Component {
    constructor(props){
      super(props);
  
      this.state = {
        value: 'grapefruit'
      };
    }
  
    handleChange = (e) => {
      this.setState({value: "The flavor you selected is : " +e.target.value});
    }
  
    handleSubmit = (e) => {
      alert(this.state.value);
      e.preventDefault();
    }
  
      render(){
        return(
          <form onSubmit={this.handleSubmit}>
            <label>
              Pick your favorite flavor:
              <select onChange={this.handleChange}>
                <option value="grapefruit">Greape Fruit</option>
                <option value="apple">Apple</option>
                <option value="chocolate">Chocolate</option>
                <option value="banana">Banana</option>
              </select>
            </label>
            <input type="submit" value="Submit" />
          </form>
        );    
      }
    }

class Reservation extends Component {
  constructor(props){
    super(props);

    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };
  }

  handleSubmit = (e) => {
    alert('I will be going: '+this.state.isGoing+" , I will bring " +this.state.numberOfGuests);
    this.e.preventDefault();
  }

  handleInputChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    console.log(name, value);
    this.setState({
      [name]: value
    });
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Are you going for the party? :
          <input 
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing} 
            onChange={this.handleChange}
          />
        </label>
        <label>
          How many guests will you bring? :
          <input 
            name="numberOfGuests"
            type="number" 
            value={this.state.numberOfGuests} 
            onChange={this.handleInputChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default App;
