import {
	BrowserRouter as Router,
	Routes, // instead of "Switch"
	Route,
  } from "react-router-dom";
  
import { Provider } from 'react-redux';
import './main.scss';
import Home from './components/Home';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import PrivateRoute from './private/PrivateRoute';
import RouteLinks from './private/RouteLinks';
import NotFound from './components/NotFound';
import Create from './components/Create';
import Edit from './components/Edit';
import EditImage from './components/EditImage';
import UpdateName from './components/UpdateName';
import Store from './store';
import ChangePassword from './components/ChangePassword';
import Details from './components/Details';
function App() {
	return (
		<Provider store={Store}>
			<Router>
				<Navbar />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path='/details/:id' element={<Details/>} />
					<Route path='/home/:page' element={<Home/>} />
					<Route  path='/register' element={<RouteLinks><Register/></RouteLinks>} />
					<Route  path='/login' element={<RouteLinks><Login/></RouteLinks>} />
				
					<Route  path='/dashboard/:page' element={<PrivateRoute><Dashboard/></PrivateRoute>} />
					<Route  path='/dashboard' element={<PrivateRoute><Dashboard/></PrivateRoute>} />
					<Route  path='/create' element={<PrivateRoute><Create/></PrivateRoute>} />
					<Route  path='/edit/:id' element={<PrivateRoute><Edit/></PrivateRoute>} />
					<Route  path='/updateImage/:id' element={<PrivateRoute><EditImage/></PrivateRoute>} />
					<Route  path='/updateName' element={<PrivateRoute><UpdateName/></PrivateRoute>} />
					<Route
						path='/updatePassword'
						element={<PrivateRoute><ChangePassword/></PrivateRoute>}
					/>
					<Route path='*' element={<NotFound/>} />
				</Routes>
			</Router>
		</Provider>
	);
}

export default App;
