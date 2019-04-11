import React, { Fragment } from "react";
// import { mapKeys, camelCase } from "lodash";
// import { calculateDiscountPrice } from "../../helpers";
// import ProductGallery from "./ProductGallery/ProductGallery";

const ProductDetail = ({ location }: Object) => {
	  const product = location.state ? location.state.product : {};
  return (
  	<Fragment>
	    <section className="section section-product">
		    <div className="container">
			    <div className="columns">
				    <div className="column is-7">
					    <nav className="breadcrumb is-small product-breadcrumb"
					         aria-label="breadcrumbs">
						    <ul>
							    <li><a className="active" aria-current="page"
							           href="https://store.cezerin.com/">Home</a></li>
							    <li><a href="https://store.cezerin.com/footwear">Footwear</a></li>
							    <li><a href="https://store.cezerin.com/man">Man</a></li>
							    <li><a className="active" aria-current="page"
							           href="https://store.cezerin.com/trainers">Trainers</a></li>
						    </ul>
					    </nav>
					    <div className="image-gallery " aria-live="polite">
						    <div className="image-gallery-content">
							    <div className="image-gallery-slide-wrapper left">
								    <div className="image-gallery-slides">
									    <div className="image-gallery-slide center" role="button"
									         style={{transform: "translate3d(0%, 0px, 0px)"}}>
										    <div className="image-gallery-image"><img
											    src={product.image} alt=""/></div>
									    </div>
								    </div>
							    </div>
						    </div>
					    </div>
				    </div>
				    <div className="column is-5">
					    <div className="content"><h1 className="title is-4 product-name">Demo Mens 7 Running Shoes</h1>
						    <div className="product-price">${product.price}</div>
						    <div>Qty</div>
						    <div className="product-quantity"><a className="decrement"></a><input
							    maxLength="3"
							    type="number"
							    pattern="\d*"
							    value="1" onChange={()=>{}}/><a className="increment"></a></div>
						    <div className="button-addtocart">
							    <button className="button is-success is-fullwidth">Add to cart
							    </button>
						    </div>
					    </div>
				    </div>
			    </div>
		    </div>
	    </section>

	    <section className="section section-product-description">
		    <div className="container">
			    <div className="content">
				    <div className="columns">
					    <div className="column is-7">
						    <div className="product-content">{product.name}<p>These Demo
							    Mens
							    Running Shoes are a lightweight construction that features a mesh
							    upper
							    to provide ventilation to feet whilst wearing. A chunky foam like sole
							    offers a cushioning to feet when on impact on the ground. A laced up
							    front fastening is teamed with a shaped ankle collar with a cushioned
							    insole to provide a secure , position locked fit. A striking Demo
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
	    <section className="section section-product-related">
		    <div className="container">
			    <div className="title is-4 has-text-centered" > Recently Viewed </div>
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
    </Fragment>);
};

export default ProductDetail;


//
// <div className="section">
// 	<div className="container">
// 		<div className="row">
// 			<div style={{ width: "1000px", display: "flex", margin: "auto" }}>
// 				<div
// 					className="prductPreview"
// 					style={{
// 						paddingRight: "80px",
// 						flexDirection: "row-reverse"
// 					}}
// 				>
// 					<ProductGallery mediaAssets={product.items.map(item => mapKeys(item, (value, key) => camelCase(key)))} />
// 				</div>
// 				<div className="">
// 					<div className="product-details">
// 						<h2 className="product-name">{product.name}</h2>
// 						<div>
// 							<div className="product-rating">
// 								<Star />
// 								<Star />
// 								<Star />
// 								<Star />
// 								<Star />
// 							</div>
// 							<a className="review-link" href="#">
// 								10 Review(s) | Add your review
// 							</a>
// 						</div>
// 						<div>
// 							<h3 className="product-price">
// 								{calculateDiscountPrice(product)} <del className="product-old-price">{`$${product.price}`}</del>
// 							</h3>
// 							<span className="product-available">In Stock</span>
// 						</div>
// 						<p>
// 							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
// 							magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
// 							consequat.
// 						</p>
//
// 					</div>
// 				</div>
// 			</div>
//
// 			<div className="col-md-12">
//
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// </div>
