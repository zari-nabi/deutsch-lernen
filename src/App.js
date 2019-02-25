import React, { Component,Fragment } from 'react';

import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar/>
        <AppRouter/>
        <Footer/>
      </Fragment>
    );
  }
}

export default App;
