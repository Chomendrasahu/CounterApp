import React, { Component } from 'react'
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count:0,
    };
  }

  incrementCounter = () => {
    this.setState({count : this.state.count + 1});
  }

  decrementCounter = () => {
    this.setState({count : this.state.count - 1});
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(nextState.count >= 11 || nextState.count <=-1){
      return false;
    }
    return true;
  }
 render() {
      let counterClass = '';
      if (this.state.count < 5) {
        counterClass = 'green';
      } else if (this.state.count < 10) {
        counterClass = 'blue';
      } else {
        counterClass = 'red';
      }
    return (
      <div className="App">
        <h2>Counter Function</h2>
        <h1 className={counterClass}>Counter : {this.state.count}</h1>
        <br></br>
        <h3>IncrementFunction</h3>
        <button onClick={this.incrementCounter}>Increment</button>
        <br></br>
        <h3>Decrement Function</h3>
        <button onClick={this.decrementCounter}>Decrement</button>
        <br></br>
      </div>
    )
  }
}