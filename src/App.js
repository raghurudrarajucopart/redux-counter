import React, { Component } from 'react';
import './App.css';
import { createStore } from 'redux';

function rootReducer(state = {value:0}, action) {
  switch (action.type) {
    case 'ADD-ONE':
    return {value: state.value + 1}
    case 'SUBTRACT-ONE':
    return {value: state.value -= 1}
    default:
    return state;
  }
}

let store = createStore(rootReducer);

class App extends Component {

  constructor() {
    super()
    store.subscribe(() => {
      console.log(store.getState());
      this.setState(store.getState())
    });

    this.state = {
      value: 0,
    }

  }

  increment(){
    console.log('Increment Method. ')
    store.dispatch({type: 'ADD-ONE'});
  }

  decrement(){
    console.log('Increment Method. ')
    store.dispatch({type: 'SUBTRACT-ONE'});
  }

  render() {
    return (
      <div className="App">
          <h1>Simple React Redux Counter Application</h1>
          <div>State Value: {this.state.value} </div>
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default App;
