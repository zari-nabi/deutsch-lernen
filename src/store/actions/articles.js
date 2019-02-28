import axios from 'axios';

export const GET_ARTICLES = 'GET_ARTICLES';

export const getArticles = () => async(dispatch , getState) => {
    const response = await axios.get('http://5c7503b6e24a2e001477f3e0.mockapi.io/articles');
    dispatch({
        type : GET_ARTICLES,
        payload: response.data
    })

}