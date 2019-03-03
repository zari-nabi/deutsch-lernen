import axios from 'axios';

import config from '../../config';


export const GET_ARTICLES = 'GET_ARTICLES';
export const POST_ARTICLES = 'POST_ARTICLES';

export const getArticles = () => async (dispatch, getState) => {
    const response = await axios.get(`${config.apiUrl}/articles`);
    dispatch({
        type: GET_ARTICLES,
        payload: response.data
    })

}

export const createArticle = (data) => async (dispatch) => {
    try {
        const response = await axios.post(`${config.apiUrl}/articles`, data)

        dispatch({
            type:POST_ARTICLES,
            payload:response.data
        })

    } catch (errors) {
        // throw new SubmissionError({
        //     _error: 'invalid credentials'
        // })
        console.log(errors)
    }
}

