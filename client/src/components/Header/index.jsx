import * as React from 'react';

const Header = () => {
	return (
		<nav className="p-4">
			<div className="nav-wrapper">
				<a href="#" className="brand-logo">
					Emaily
				</a>
				<ul id="nav-mobile" className="right hide-on-med-and-down">
					<li>
						<a href="#">Login with google</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Header;
