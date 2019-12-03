import jsonPlaceholder from '../apis/jsonPlaceholder';
//import Axios from 'axios';

// Redux Thunk - return an function that is what thunk does
export const fetchPosts = () => async (dispatch) => {
    const response = await jsonPlaceholder.get('/posts');
    
    dispatch({
        type: 'FETCH_POSTS', payload: response.data
    });
};

export const fetchUser = (id) => async (dispatch) => {    
    const response = await jsonPlaceholder.get(`/users/${id}`);
    
    dispatch({
        type: 'FETCH_USER', payload: response.data
    });
};

//Altenative way
/*
export const fetchPosts = () => async (dispatch) => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({
        type: 'FETCH_POSTS', payload: response
    })
};

export const fetchPosts = () => {
    return async (dispatch) => {
        const response = await jsonPlaceholder.get('/posts');
    
        dispatch({
            type: 'FETCH_POSTS', payload: response
        })
    }    
};
*/