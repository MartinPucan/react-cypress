import React, { useState } from 'react';

const Counter = () => {
	const [counter, setCounter] = useState(0);

	const increment = () => { setCounter(counter + 1) }
	const decrement = () => { setCounter(counter - 1) }
	const reset = () => { setCounter(0) }

	return (
		<div className="m-5">
			<div className="d-flex align-items-center justify-content-between">
				<h4>Counter</h4>
				<div
					className="h1"
					data-cy="counter"
				>
					{counter}
				</div>
			</div>
			<hr/>
			<div className="d-flex justify-content-around">
				<button
					className="btn btn-info btn-group-lg"
					onClick={increment}
					data-cy="btn-increment"
				>
					<i className="fas fa-plus"></i>
				</button>
				<button
					className="btn btn-secondary btn-group-lg"
					onClick={reset}
					data-cy="btn-reset"
				>
					Reset
				</button>
				<button
					className="btn btn-info btn-group-lg"
					onClick={decrement}
					data-cy="btn-decrement"
				>
					<i className="fas fa-minus"></i>
				</button>
			</div>
		</div>
	)
}

export default Counter;
