import React, { Component } from 'react';
import './App.css';
import { createStore } from 'redux';

function rootReducer(state = [], action) {
  switch (action.type) {
    case 'ADD-ONE':
    return state.concat(action.data)
    case 'SUBTRACT-ONE':
    return state.concat(action.data)
    default:
    return store;
  }
}

let store = createStore(rootReducer);

class App extends Component {
  constructor() {
    super()
    store.subscribe(() => {
      console.log(store.getState());
    });
  }

  increment(){
    console.log('Increment Method. ')
    store.dispatch({type: 'ADD-ONE', data: 'Add one'});
  }

  decrement(){
    console.log('Increment Method. ')
    store.dispatch({type: 'SUBTRACT-ONE', data: 'Remove one'});
  }

  render() {
    return (
      <div className="App">
          <h1>Simple React Redux Counter Application</h1>
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default App;
