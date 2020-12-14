import React from "react";

const NavBar = () => {
	const name = 'React-Cypress';

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<a className="navbar-brand">{name}</a>
		</nav>
	)
}

export default NavBar;
