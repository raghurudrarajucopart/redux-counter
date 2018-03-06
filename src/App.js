import React, { Component } from 'react';
import './App.css';
import { createStore } from 'redux';

function rootReducer(state = {}, action) {
  switch (action.type) {
    case 'ADD-ONE':
    return state.concat('added one')
    case 'SUBTRACT-ONE':
    return state.concat('subtract one')
    default:
    return store;
  }
}

let store = createStore(rootReducer);

  render() {
    return (
      <div className="App">
          <h1>Simple React Redux Counter Application</h1>
          <button>Increment</button>
          <button>Decrement</button>
      </div>
    );
  }
}

export default App;
