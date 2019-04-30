import React from "react";

const Related = () => (
	<section className="section section-product-related">
		<div className="container">
			<div className="title is-4 has-text-centered"> Recently Viewed</div>
			<div className="columns is-multiline is-mobile products is-centered">
				<div
					className="column is-6-mobile is-4-tablet is-3-desktop is-3-widescreen is-3-fullhd available">
					<a href="https://store.cezerin.com/dji/dji-mavic-pro">
						<figure className="image" style={{ height: "280px" }}><img
							src="images/71kFJph6q9L._SL1500_(1).jpg"
							alt="DJI Mavic Pro" title="DJI Mavic Pro"/></figure>
						<div className="content product-caption">
							<div className="product-name">DJI Mavic Pro</div>
							<div className="product-price">$999.00</div>
						</div>
					</a></div>
				<div
					className="column is-6-mobile is-4-tablet is-3-desktop is-3-widescreen is-3-fullhd available">
					<a href="https://store.cezerin.com/trainers/demo-mens-3-running-shoes">
						<figure className="image" style={{ height: "280px" }}><img
							src="images/3(1).jpg" alt="Demo Mens 3 Running Shoes"
							title="Demo Mens 3 Running Shoes"/></figure>
						<div className="content product-caption">
							<div className="product-name">Demo Mens 3 Running Shoes</div>
							<div className="product-price">$84,208.00</div>
						</div>
					</a></div>
			</div>
			<div className="load-more"></div>
		</div>
	</section>
);

export default Related;
