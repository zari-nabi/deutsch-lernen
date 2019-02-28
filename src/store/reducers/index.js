import { combineReducers } from 'redux';


import articleReducer from './articles';

const reducer = combineReducers({
    articles: articleReducer,
   

});

export default reducer;
