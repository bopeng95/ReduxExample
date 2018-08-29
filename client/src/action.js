import axios from 'axios';
export const types = {
	GET_RANDOM: 'GET_RANDOM',
	GET_RANDOM_COMPLETED: 'GET_RANDOM_COMPLETED',
	GET_PIC: 'GET_PIC',
	GET_PIC_COMPLETED: 'GET_PIC_COMPLETED'
}

export function getRandom() {
	return function(dispatch) {
		dispatch({type: types.GET_RANDOM});
		axios.get('https://dog.ceo/api/breeds/image/random/50')
		.then((response) => {
			dispatch({type: types.GET_RANDOM_COMPLETED, payload: response.data});
		}).catch(err => console.log(err.response));
	}
}
export function getPic(name) {
	return function(dispatch) {
		dispatch({type: types.GET_PIC, name:name});
		axios.get('https://dog.ceo/api/breed/'+name.toLowerCase()+'/images')
		.then((response) => {
			dispatch({type: types.GET_PIC_COMPLETED, payload: response.data});
		}).catch(err => console.log(err.response));
	}
}