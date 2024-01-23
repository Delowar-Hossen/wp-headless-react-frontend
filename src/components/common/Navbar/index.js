import React from 'react';
import { Link  } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../redux/slice/authSlice';


//const Navbar = ({authUser}) => {
function Navbar() {
	//const auth = localStorage.getItem('user');
	const dispatch = useDispatch();
  	const authUser = useSelector((state) => state.auth.user );
  
  	console.log('authUser', authUser);

	return (

	    <>
			<nav className="bg-white border-gray-200 dark:bg-gray-900">
			    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
			        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
			            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="AimsBite Logo" />
			            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">AimsBite</span>
			        </Link>
			        <div className="flex items-center space-x-6 rtl:space-x-reverse">
			            {!authUser.token ? (
		        		<>
		        		<Link to="/login" className="text-sm  text-gray-600 dark:text-gray-500 hover:underline">Login</Link>
		        		<Link to="/register" className="text-sm  text-gray-600 dark:text-gray-500 hover:underline">Register</Link>
		        		</>
		        		): (
		        		<>
		        		
		        		<Link to="/add-post" className="text-sm  text-blue-600 dark:text-blue-500 hover:underline">Add Post</Link>
		        		<Link  onClick={() => dispatch(logout())} className="text-sm  text-blue-600 dark:text-blue-500 hover:underline">Logout</Link>
	                	<Link to='/profile' className="text-sm  text-blue-600 dark:text-blue-500 hover:underline">Hi {authUser.user_display_name}</Link>
		        		</>

		        		)

		        	}
			        </div>
			    </div>
			</nav>
			<nav className="bg-gray-50 dark:bg-gray-700">
			    <div className="max-w-screen-xl px-4 py-3 mx-auto">
			        <div className="flex items-center">
			            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
			                <li>
			                    <Link to="/" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</Link>
			                </li>
			                <li>
			                    <Link to="/posts" className="text-gray-900 dark:text-white hover:underline">Post</Link>
			                </li>
			                <li>
			                    <Link to="/" className="text-gray-900 dark:text-white hover:underline">Team</Link>
			                </li>
			                <li>
			                    <Link to="/" className="text-gray-900 dark:text-white hover:underline">Features</Link>
			                </li>
			            </ul>
			        </div>
			    </div>
			</nav>
					    
		
	    </>
	)
}

export default Navbar