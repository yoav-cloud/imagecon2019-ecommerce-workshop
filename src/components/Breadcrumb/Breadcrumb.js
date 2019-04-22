import React from "react";

const Breadcrumb = () => (
	<nav className="breadcrumb is-small product-breadcrumb"
	     aria-label="breadcrumbs">
		<ul>
			<li><span className="active" aria-current="page">Home</span></li>
			<li><span>Footwear</span></li>
			<li><span>Man</span></li>
			<li><span className="active" aria-current="page">Trainers</span></li>
		</ul>
	</nav>
);

export default Breadcrumb;