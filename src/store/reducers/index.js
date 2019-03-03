import { combineReducers } from 'redux';


import articleReducer from './articles';
import authReducer from './auth';

const reducer = combineReducers({
    articles: articleReducer,
    auth: authReducer,

});

export default reducer;
