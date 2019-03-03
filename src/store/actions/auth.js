import axios from "axios";
import { SubmissionError } from 'redux-form';

import config from "../../config";

export const REGISTER_USER = 'REGISTER_USER';
export const LOGIN_USER = 'LOGIN_USER';

export const registerUser = (data) => async (dispatch) => {
    try {
        const response = await axios.post(`${config.apiUrl}/register`, {
            name: data.name,
            email: data.email,
            password: data.password
        })
        console.log(data)
        dispatch({
            type: REGISTER_USER,
            payload: response.data
        })
    } catch (errors) {
        throw new SubmissionError({
            ...errors.response.data,
            _error: "Something went wrong."
        })
    }

}

