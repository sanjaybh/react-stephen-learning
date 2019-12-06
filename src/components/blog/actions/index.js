import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';


export const fetchPostsAndUsers = () => async dispatch => {
    dispatch(fetchPosts());
}

// Redux Thunk - return an function that is what thunk does
export const fetchPosts = () => async (dispatch) => {
    const response = await jsonPlaceholder.get('/posts');
    
    dispatch({
        type: 'FETCH_POSTS', payload: response.data
    });
}; 

export const fetchUser = id => async dispatch => {
    // #1 approach
    const response = await jsonPlaceholder.get(`/users/${id}`);
    
    dispatch({ type: 'FETCH_USER', payload: response.data });
};

/*
//memoize ->
export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
const _fetchUser =  _.memoize(async (id, dispatch) => {
    // #2 approach
    const response = await jsonPlaceholder.get(`/users/${id}`);
    
    dispatch({ type: 'FETCH_USER', payload: response.data });
});
*/


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