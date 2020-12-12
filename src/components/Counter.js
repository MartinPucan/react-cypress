import React, {useEffect, useState} from 'react';

const Counter = () => {

	const [counter, setCounter] = useState(0);

	// useEffect(() => {
	// 	setCounter()
	// }, [])

	const increment = () => { setCounter(counter + 1) }
	const decrement = () => { setCounter(counter - 1) }
	const reset = () => { setCounter(0) }


	return(
		<div className="m-5">
			<h4>Counter</h4>
			<span className="font-weight-bolder">{counter}</span>
			<hr/>
			<div className="d-flex justify-content-around">
				<button className="btn btn-info btn-group-lg" onClick={increment}><i className="fas fa-plus"></i></button>
				<button className="btn btn-secondary btn-group-lg" onClick={reset}>Reset</button>
				<button className="btn btn-info btn-group-lg" onClick={decrement}><i className="fas fa-minus"></i></button>
			</div>
		</div>
	)

}

export default Counter;
