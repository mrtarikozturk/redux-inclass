import axios from "axios";


/**
    export const getUserList = () => async (dispatch, getState) => {
        try {
            dispatch({ type: 'SET_LOADING_TRUE' });
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            dispatch({ type: 'SET_USER_LIST', payload: response.data })
        } catch (error) {
            console.log(error)
        } finally {
            dispatch({ type: 'SET_LOADING_FALSE' });
        }
    
    }
*/

export const getUserList = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: 'SET_LOADING_TRUE' });
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/`);
            // const response = await axios.get(`https://jsonplaceholder.typicode.com/users/id=${id}`);
            dispatch({ type: 'SET_USER_LIST', payload: response.data })
        } catch (error) {
            console.log(error)
        } finally {
            dispatch({ type: 'SET_LOADING_FALSE' });
        }
    }
}