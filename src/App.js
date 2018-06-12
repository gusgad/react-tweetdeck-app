import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';


import Board from './components/Board/Board';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Board />
        </div>
      </Provider>
    );
  }
}

export default App;