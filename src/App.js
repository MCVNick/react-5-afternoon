import React, { Component } from 'react';
import './App.css';
import router from './router'
import { Provider } from 'react-redux'
import store from './store'
import { HashRouter as Router } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Router>
            {router}
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;