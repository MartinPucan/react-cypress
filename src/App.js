import React, {useEffect, useState} from "react";
import './App.css';
import Tree from './christmas-tree.svg';
// import Counter from "./components/Counter";
// import NavBar from "./components/NavBar.js";

function App() {
	const calculateTimeLeft = () => {
		let year = new Date().getFullYear();
		const difference = +new Date(`${year}-12-24`) - +new Date();
		let timeLeft = {};

		if (difference > 0) {
			timeLeft = {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60),
			};
		}

		return timeLeft;
	};

	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
	const [year] = useState(new Date().getFullYear());
	const timerComponents = [];

	useEffect(() => {
		setTimeout(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);
	}, []);


	Object.keys(timeLeft).forEach((interval) => {
		if (!timeLeft[interval]) {
			return;
		}

		timerComponents.push(
			<span>
        {timeLeft[interval]} {interval}{" "}
      </span>
		);
	});

  return (
    <div className="App bg-danger">
			{/*<NavBar />*/}
			{/*<div className="container-fluid">*/}

			<div className="card text-white bg-danger mb-3">
				<div className="card-header d-flex justify-content-around align-items-center">
					<img src={Tree} width={64} alt="christmas-tree" />
					<h3 className="text-center">Christmas Countdown {year}</h3>
					<img src={Tree} width={64} alt="christmas-tree" />
				</div>
				<div className="card-body">
					<div className="d-flex col justify-content-center p-5">
						<div className="m-2">
							<h1> {timeLeft.days}d</h1>
						</div>
						<div className="m-2">
							<h1> {timeLeft.hours}h</h1>
						</div>
						<div className="m-2">
							<h1> {timeLeft.minutes}m</h1>
						</div>
						<div className="m-2">
							<h1> {timeLeft.seconds}s</h1>
						</div>
					</div>
				</div>

				{/*<Counter />*/}
				{/*<hr />*/}
			</div>
		</div>
  );
}

export default App;
