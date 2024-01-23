import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Single() {

	const { id } = useParams();
	const [post, setPost] = useState('')

	useEffect( () => {

		let url = `${process.env.REACT_APP_API_ROOT}/posts/${id}`;
		axios.get(url).then( res => {
			console.log('res', res );
			setPost(res.data);
		}).catch(err => {
			console.log('error:', err.message );
		});

	});

	return (
		<>
			<section className="h-screen">
                <div className="container px-6 py-12 h-full mx-auto">
					{ Object.keys(post).length ? (
						<div className="p-5">
							<div>
								<img  className="rounded-lg" src={ post.featured_src } />
							</div>
							<div>
								<h1 className="text-2xl font-bold">
								{ post.title.rendered }
								</h1>
							</div>
							<div dangerouslySetInnerHTML={ {__html: post.content.rendered } } ></div>
						</div>

					) : 'loading...' }
				</div>
			</section>
		</>
	)
}

export default Single