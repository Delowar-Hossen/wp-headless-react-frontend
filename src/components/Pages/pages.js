import React from 'react';
import { Routes, Route  } from 'react-router-dom';
import Home from './Home';
import Posts from './Post';
import Single from './Single';
import Login from './Login';
import Register from './Register';
import AddPost from './AddPost';
import Navbar from '../common/Navbar';

import { useSelector } from 'react-redux';
import ProtectedRoute from './ProtectedRoute';

function Pages() {


  	const authUser = useSelector((state) => state.auth.user );

	return (
		<>
			<Navbar authUser={authUser} />
	      	<Routes>
	        	<Route path="/" element={<Home />} />
	        	<Route path="/posts" element={<Posts />} />
	        	<Route path="/posts/:id" element={<Single />} />
	        	<Route path="/login" element={<Login />} />
	        	<Route path="/register" element={<Register />} />
	        	<Route element={<ProtectedRoute authUser={authUser} />}>
	        		<Route path="/add-post" element={<AddPost />} />
	        		<Route path="/profile" element={<div> Profile Page </div>} />
	        	</Route>
	      	</Routes>
		</>
	)
}

export default Pages