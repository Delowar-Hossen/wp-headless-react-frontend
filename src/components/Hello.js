import React, { useState, useEffect }  from 'react';

import style from './css/style.css';

import Child from './Child';

const Hello = ( props ) => {
		const [fname, setFname] = useState('');
		console.log( 'fname', fname );

		useEffect(() => {

			console.log( 'Hello' )
			
		});


		return (
				<>
					<h1 className={style.h1}>Hello { props.name }</h1>
          			<Child />
					<p className={style.p}>{ fname }</p>
					<input type="text" onChange={ (e) => setFname( e.target.value ) } />
				</>
		)
}
export default Hello;