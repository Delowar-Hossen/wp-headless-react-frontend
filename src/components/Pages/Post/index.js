import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Posts = () => {

	//const posts = [];

	const [posts, setPosts] = useState('');

	useEffect( () => {
		//let url = 'http://localhost/wp-headless/server/wp-json/wp/v2/posts';
		let url = `${process.env.REACT_APP_API_ROOT}/posts`;
		axios.get( url ).then( ( res ) => {
			setPosts( res.data );
		});
	},[]);
	
	return(

			<div className="w-4/5 py-10 m-auto flex justify-between align-middle flex-wrap gap-10">
			{
				Object.keys(posts).length ? posts.map( (post) => {
					//return <p key={post.id}>{ post.title.rendered }</p>
					return(
							<div key={post.id} className="max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
								<Link to={`/posts/${post.id}`} >

									{ post.featured_src ? (
											<img className="rounded-t-lg" src={ post.featured_src } />

										) : (
											<img className="rounded-t-lg" src="https://via.placeholder.com/500" alt={post.title.rendered} />

										)
									}
								</Link>
					
								<div class="p-5">
							         <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{ post.title.rendered }</h5>
							        
							        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400" dangerouslySetInnerHTML={ {__html: post.excerpt.rendered } } ></p>
							        <Link to={`/posts/${post.id}`} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
							            Read more
							             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
							                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
							            </svg>
							        </Link>
							    </div>
							</div>
					)
				}) : 'Loading...'
			}
			</div>

	)


}
export default Posts;