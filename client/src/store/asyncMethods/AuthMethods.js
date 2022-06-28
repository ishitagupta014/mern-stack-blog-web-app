import axios from 'axios';
import {
	SET_LOADER,
	CLOSE_LOADER,
	SET_TOKEN,
	REGISTER_ERRORS,
	LOGIN_ERRORS,
} from '../types/UserTypes';
import { REDIRECT_TRUE } from '../types/UserTypes';

// Behind this function thunk-middleware will work
export const postRegister = (state) => {
	return async (dispatch) => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		dispatch({ type: SET_LOADER });
		try {
			const { data } = await axios.post('/register', state, config);
			dispatch({ type: CLOSE_LOADER });
			dispatch({type:REDIRECT_TRUE})
		//	localStorage.setItem('myToken', data.token);
			//dispatch({ type: SET_TOKEN, payload: data.token });
		} catch (error) {
			dispatch({ type: CLOSE_LOADER });
			dispatch({
				type: REGISTER_ERRORS,
				payload: error.response.data.errors,
			});
		}
	};
};
export const postLogin = (state) => {
	return async (dispatch) => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		try {
			dispatch({ type: SET_LOADER });
			console.log(state);
			const { data } = await axios.post('/login', state, config);
			console.log(data)
			dispatch({ type: CLOSE_LOADER });
			localStorage.setItem('myToken', data.token);
			dispatch({ type: SET_TOKEN, payload: data.token });
		} catch (error) {
			dispatch({ type: CLOSE_LOADER });
			//console.log("Error"+error.response.data)
			dispatch({ type: LOGIN_ERRORS, payload: error.response.data.errors });
		}
	};
};
