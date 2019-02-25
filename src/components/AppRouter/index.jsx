import React, { Component,Fragment } from 'react';
import {Route } from 'react-router-dom';

import Home from '../../pages/Home';
import Articles from '../../pages/Articles';

class AppRouter extends Component {
  render() {
    return (
      <Fragment>
        <Route path="/" exact component={Home}/>
        <Route path="/articles" component={Articles}/>
        {/* <Route path="/login" component={Login}/>
        <Route path="/signup" component={Signup}/> */}
      </Fragment>
    );
  }
}

export default AppRouter;
