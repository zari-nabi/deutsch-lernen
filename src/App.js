import React, { Component,Fragment } from 'react';

import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar/>
        <AppRouter/>
      </Fragment>
    );
  }
}

export default App;
