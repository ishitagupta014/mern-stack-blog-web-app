import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { LOGOUT } from '../store/types/UserTypes';
import { useEffect,useState} from 'react';
const Navbar = () => {
	const { user } = useSelector((state) => state.AuthReducer);
	const [val,setVal]=useState('');
	const dispatch = useDispatch();
	const logout = () => {
		localStorage.removeItem('myToken');
		dispatch({ type: LOGOUT });
	};
	useEffect(()=>{
          setVal(user)
	},[user])
	const Links = user ? (
		<div className='navbar__right'>
			<li>
				<Link to='/create'><span>Create Post</span></Link>
			</li>
			<li>
				<Link to='/dashboard/1'><span>{user.name}</span></Link>
			</li>
			<li>
				<span onClick={logout}>Logout</span>
			</li>
		</div>
	) : (
		<div className='navbar__right'>
			<li>
				<Link to='/login'><span>Login</span></Link>
			</li>
			<li>
				<Link to='/register'><span>Register</span></Link>
			</li>
		</div>
	);
	return (
		<nav className='navbar'>
			<div className='container'>
				<div className='navbar__row'>
					<div className='navbar__left'>
						<Link to='/'>
							<img src="/images/logo.png" alt='' />
						</Link>
					</div>
					{Links}
				</div>
			</div>
		</nav>
	);
};
export default Navbar;
