import React from "react";

const Breadcrumb = () => (
	<nav className="breadcrumb is-small product-breadcrumb"
	     aria-label="breadcrumbs">
		<ul>
			<li><a className="active" aria-current="page"
			       href="#">Home</a></li>
			<li><a href="#">Footwear</a></li>
			<li><a href="#">Man</a></li>
			<li><a className="active" aria-current="page"
			       href="#">Trainers</a></li>
		</ul>
	</nav>
);

export default Breadcrumb;