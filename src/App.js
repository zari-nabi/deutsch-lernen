import React, { Component, Fragment } from 'react';

import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

class App extends Component {
  render() {
    const isNotAuthPath = this.props.history.location.pathname !== '/signup' &&
      this.props.history.location.pathname !== '/login'

    return (
      <Fragment>
        {isNotAuthPath &&
          <Navbar />
        }
        <AppRouter />
        {isNotAuthPath &&
          <Footer />
        }
      </Fragment>
    );
  }
}

export default App;
