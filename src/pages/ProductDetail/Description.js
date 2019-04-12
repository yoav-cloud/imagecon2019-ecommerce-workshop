import React from "react";

const Description = ({ name }) => (
	<section className="section section-product-description">
		<div className="container">
			<div className="content">
				<div className="columns">
					<div className="column is-7">
						<div className="product-content">
							<h3>{name}</h3>
							<p>These Demo
								Mens
								Running Shoes are a lightweight construction that features a
								mesh
								upper
								to provide ventilation to feet whilst wearing. A chunky foam
								like sole
								offers a cushioning to feet when on impact on the ground. A
								laced up
								front fastening is teamed with a shaped ankle collar with a
								cushioned
								insole to provide a secure , position locked fit. A striking
								Demo
								Swoosh
								is situated on the sides of the trainers to complete the overall
								look.</p>
							<ul>
								<li>Trainers</li>
								<li>Lightweight</li>
								<li>Mesh panelling</li>
								<li>Laced up front fastening</li>
								<li>Shaped and padded ankle collar</li>
								<li>Foam like sole</li>
								<li>Demo branding</li>
								<li>Upper: textile, Lining: textile, Sole: synthetic</li>
							</ul>
						</div>
					</div>
					<div className="column is-5">
						<div className="product-attributes">
							<div className="title is-5">Product details</div>
							<div className="columns is-gapless is-mobile product-attribute">
								<div className="column is-5 attribute-name">Size:</div>
								<div className="column is-7 attribute-value">25</div>
							</div>
							<div className="columns is-gapless is-mobile product-attribute">
								<div className="column is-5 attribute-name">Size:</div>
								<div className="column is-7 attribute-value">13</div>
							</div>
							<div className="columns is-gapless is-mobile product-attribute">
								<div className="column is-5 attribute-name">Size:</div>
								<div className="column is-7 attribute-value">4</div>
							</div>
							<div className="columns is-gapless is-mobile product-attribute">
								<div className="column is-5 attribute-name">Size:</div>
								<div className="column is-7 attribute-value">42</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default Description;