import {REGISTER_USER,LOGIN_USER} from '../actions/auth';


const authReducer = (state = { data: [] }, action) => {
    switch (action.type) {
        case REGISTER_USER:
            return {
                ...state,
                user: action.payload.user
            }
      
        default:
            return state
    }
}

export default authReducer;