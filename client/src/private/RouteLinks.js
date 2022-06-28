import { Children } from 'react';
import { useSelector } from 'react-redux';
import { Route, Navigate} from 'react-router-dom';

const RouteLinks = ({children}) => {
	const { user } = useSelector((state) => state.AuthReducer);
	console.log(children);
	//console.log(props)
	console.log(user);
	//console.log(props.element)
	return user ? (
		// <Redirect to='/dashboard' />
		<Navigate to="/dashboard"/>
	) : (
		// <Route {...props}/>
		children
	);
};
export default RouteLinks;
