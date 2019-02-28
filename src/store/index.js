import {createStore , compose , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducers';

const initialsState = {
    articles : []
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initialsState,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;


