import jwt_decode from 'jwt-decode';
import {
	SET_LOADER,
	CLOSE_LOADER,
	SET_TOKEN,
	REGISTER_ERRORS,
	LOGOUT,
	REDIRECT_TRUE,
	REDIRECT_FALSE,
	LOGIN_ERRORS,
	REMOVE_REGISTER_ERRORS,
	REMOVE_LOGIN_ERRORS
} from '../types/UserTypes';
const initState = {
	loading: false,
	redirect:false,
	registerErrors: [],
	loginErrors: [],
	token: '',
	user: '',
};
const verifyToken = (token) => {
	const decodeToken = jwt_decode(token);
	//console.log(decodeToken)
	const expiresIn = new Date(decodeToken.exp * 1000);
	if (new Date() > expiresIn) {
		localStorage.removeItem('myToken');
		return null;
	} else {
		return decodeToken;
	}
};
const token = localStorage.getItem('myToken');
if (token) {
	const decoded = verifyToken(token);
	if (decoded) {
		//console.log(decoded);
		initState.token = token;
		const  user= decoded;
		console.log(user)
		initState.user = user;
	}
}

const AuthReducer = (state = initState, action) => {
	if (action.type === SET_LOADER) {
		return { ...state, loading: true };
	} else if (action.type === CLOSE_LOADER) {
		return { ...state, loading: false };
	} else if (action.type === REDIRECT_TRUE) {
		return { ...state, redirect: true };
	} else if (action.type === REDIRECT_FALSE) {
		return { ...state, redirect: false }
	} else if (action.type === REGISTER_ERRORS) {
		return { ...state, registerErrors: action.payload };
	} else if (action.type === SET_TOKEN) {
		const decoded = verifyToken(action.payload);
		console.log(decoded)
		const user = decoded;
		console.log(user);
		return {
			...state,
			token: action.payload,
			user: user,
			loginErrors: [],
			registerErrors: [],
		};
	} else if (action.type === LOGOUT) {
		return { ...state, token: '', user: '' };
	} else if (action.type === LOGIN_ERRORS) {
		return {
			...state,
			loginErrors: action.payload,
		};
	}
	else if(action.type=== REMOVE_REGISTER_ERRORS){
		return {...state,registerErrors:[]}
	}
	else if(action.type=== REMOVE_LOGIN_ERRORS){
		return {...state,loginErrors:[]}
	} else {
		return state;
	}
};
export default AuthReducer;
