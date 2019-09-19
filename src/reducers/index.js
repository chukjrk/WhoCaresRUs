import {combineReducers } from 'redux';
import loggedReducer from './isLogged';
import commentsArray from './commentsArray';

export default combineReducers({
	isLogged: loggedReducer,
	comments: commentsArray
});