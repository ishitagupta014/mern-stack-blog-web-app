import { useSelector } from 'react-redux';
import { Route, Navigate} from 'react-router-dom';
const PrivateRoute = ({children}) => {
	const { user } = useSelector((state) => state.AuthReducer);
	//console.log(props.element)
	return user ? (
		children
	) : (
		// <Redirect to='/login' />
		<Navigate to="/login" replace/>
	);
};
export default PrivateRoute;
