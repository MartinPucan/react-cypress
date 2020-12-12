import React from "react";

const Donate = () => {
	return (
		<button className="tip-button">
			<span className="tip-button__text">Send me a tip</span>
			<div className="coin-wrapper">
				<div className="coin">
					<div className="coin__middle"></div>
					<div className="coin__back"></div>
					<div className="coin__front"></div>
				</div>
			</div>
		</button>
	)
}

export default Donate;
