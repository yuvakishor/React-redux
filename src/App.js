import React from 'react';
import './App.css';
import Routing from '../src/Routing/Routing'
import { Provider } from 'react-redux'
import store from './store'




class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <Routing />
        </React.Fragment>
      </Provider>
    )
  }
}

export default App;
