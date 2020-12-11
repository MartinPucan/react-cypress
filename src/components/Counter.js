import React, {useEffect, useState} from 'react';

const Counter = () => {

	const [counter, setCounter] = useState(null);

	useEffect(() => {
		setCounter()
	}, [])


	return(
		<div>

		</div>
	)

}

export default Counter;
