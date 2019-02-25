import React, { Component,Fragment } from 'react';
import {Route } from 'react-router-dom';

import Home from '../../pages/Home';
import Articles from '../../pages/Articles';

class AppRouter extends Component {
  render() {
    return (
      <Fragment>
        <Route path="/" exact Component={Home}/>
        <Route path="/articles" Component={Articles}/>
      </Fragment>
    );
  }
}

export default AppRouter;
