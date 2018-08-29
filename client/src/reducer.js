import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { types } from './action.js';

let initialState = {
	rand: 'Random',
	dogs: ['Eskimo', 'Boxer', 'Dingo', 'Shihtzu', 'Shiba'],
	images: [],
	fetching: false
}

function reducer(state = initialState, action) { 
	switch (action.type) {
		case types.GET_RANDOM: 
			return {
				...state,
				fetching: true
			}
		case types.GET_RANDOM_COMPLETED:
			return {
				...state,
				fetching: false,
				images: action.payload.message
			}
		case types.GET_PIC:
			return {
				...state,
				fetching: true
			}
		case types.GET_PIC_COMPLETED:
			console.log(action.name);
			return {
				...state,
				fetching: false,
				images: action.payload.message
			}
		default:
			return state;
	}
}

const middleware = applyMiddleware(promise(), thunk, logger);
const store = createStore(reducer, middleware);

export default store;