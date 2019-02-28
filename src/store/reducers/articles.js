import { GET_ARTICLES} from '../actions/articles';


const articleReducer = (state = { data: [] }, action) => {
    switch (action.type) {
        case GET_ARTICLES:
            return action.payload

      
        default:
            return state
    }
}

export default articleReducer;