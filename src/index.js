import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, withRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import App from './App';

const AppWithRouter = withRouter(App);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <AppWithRouter />
        </BrowserRouter>
    </Provider>


    , document.getElementById('root'));



