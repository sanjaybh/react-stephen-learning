import { combineReducers } from 'redux';
import postReducer from './postsReduer';
import usersReducer from './usersReducer';

export default combineReducers({
    posts: postReducer,
    users: usersReducer
});