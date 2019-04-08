import React, { Fragment } from "react";
// import { mapKeys, camelCase } from "lodash";
// import { calculateDiscountPrice } from "../../helpers";
// import ProductGallery from "./ProductGallery/ProductGallery";


const Product = ({ location }: Object) => {
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

export default Product;


// const Star = () => (
//   <svg style={{ backgroundColor: "red" }} version="1.1" width="21px" height="20px">
//     <path
//       style={{ fill: "white" }}
//       d="M0,0.054V20h21V0.054H0z M15.422,18.129l-5.264-2.768l-5.265,2.768l1.006-5.863L1.64,8.114l5.887-0.855
// 	l2.632-5.334l2.633,5.334l5.885,0.855l-4.258,4.152L15.422,18.129z"
//     />
//   </svg>
// );


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
// 						<div className="product-options">
// 							<label>
// 								Size
// 								<select className="input-select">
// 									<option value="0">X</option>
// 								</select>
// 							</label>
// 							<label>
// 								Color
// 								<select className="input-select">
// 									<option value="0">Red</option>
// 								</select>
// 							</label>
// 						</div>
// 						<div className="add-to-cart">
// 							<div className="qty-label">
// 								Qty
// 								<div className="input-number">
// 									<input type="number" />
// 									<span className="qty-up">+</span>
// 									<span className="qty-down">-</span>
// 								</div>
// 							</div>
// 							<button className="add-to-cart-btn">
// 								<i className="fa fa-shopping-cart" /> add to cart
// 							</button>
// 						</div>
// 						<ul className="product-btns">
// 							<li>
// 								<a href="#">
// 									<i className="fa fa-heart-o" /> add to wishlist
// 								</a>
// 							</li>
// 							<li>
// 								<a href="#">
// 									<i className="fa fa-exchange" /> add to compare
// 								</a>
// 							</li>
// 						</ul>
// 						<ul className="product-links">
// 							<li>Category:</li>
// 							<li>
// 								<a href="#">Headphones</a>
// 							</li>
// 							<li>
// 								<a href="#">Accessories</a>
// 							</li>
// 						</ul>
// 						<ul className="product-links">
// 							<li>Share:</li>
// 							<li>
// 								<a href="#">
// 									<i className="fa fa-facebook" />
// 								</a>
// 							</li>
// 							<li>
// 								<a href="#">
// 									<i className="fa fa-twitter" />
// 								</a>
// 							</li>
// 							<li>
// 								<a href="#">
// 									<i className="fa fa-google-plus" />
// 								</a>
// 							</li>
// 							<li>
// 								<a href="#">
// 									<i className="fa fa-envelope" />
// 								</a>
// 							</li>
// 						</ul>
// 					</div>
// 				</div>
// 			</div>
//
// 			<div className="col-md-12">
// 				<div id="product-tab">
// 					<ul className="tab-nav">
// 						<li className="active">
// 							<a data-toggle="tab" href="#tab1">
// 								Description
// 							</a>
// 						</li>
// 						<li>
// 							<a data-toggle="tab" href="#tab2">
// 								Details
// 							</a>
// 						</li>
// 						<li>
// 							<a data-toggle="tab" href="#tab3">
// 								Reviews (3)
// 							</a>
// 						</li>
// 					</ul>
//
// 					<div className="tab-content">
// 						<div id="tab1" className="tab-pane fade in active">
// 							<div className="row">
// 								<div className="col-md-12">
// 									<p>
// 										Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
// 										dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
// 										ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
// 										fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
// 										mollit anim id est laborum.
// 									</p>
// 								</div>
// 							</div>
// 						</div>
//
// 						<div id="tab2" className="tab-pane fade in">
// 							<div className="row">
// 								<div className="col-md-12">
// 									<p>
// 										Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
// 										dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
// 										ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
// 										fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
// 										mollit anim id est laborum.
// 									</p>
// 								</div>
// 							</div>
// 						</div>
//
// 						<div id="tab3" className="tab-pane fade in">
// 							<div className="row">
// 								<div className="col-md-3">
// 									<div id="rating">
// 										<div className="rating-avg">
// 											<span>4.5</span>
// 											<div className="rating-stars">
// 												<i className="fa fa-star" />
// 												<i className="fa fa-star" />
// 												<i className="fa fa-star" />
// 												<i className="fa fa-star" />
// 												<i className="fa fa-star-o" />
// 											</div>
// 										</div>
// 										<ul className="rating">
// 											<li>
// 												<div className="rating-stars">
// 													<i className="fa fa-star" />
// 													<i className="fa fa-star" />
// 													<i className="fa fa-star" />
// 													<i className="fa fa-star" />
// 													<i className="fa fa-star" />
// 												</div>
// 												<div className="rating-progress">
// 													<div style={{ width: "80%" }} />
// 												</div>
// 												<span className="sum">3</span>
// 											</li>
// 											<li>
// 												<div className="rating-stars">
// 													<i className="fa fa-star" />
// 													<i className="fa fa-star" />
// 													<i className="fa fa-star" />
// 													<i className="fa fa-star" />
// 													<i className="fa fa-star-o" />
// 												</div>
// 												<div className="rating-progress">
// 													<div style={{ width: "60%" }} />
// 												</div>
// 												<span className="sum">2</span>
// 											</li>
// 											<li>
// 												<div className="rating-stars">
// 													<i className="fa fa-star" />
// 													<i className="fa fa-star" />
// 													<i className="fa fa-star" />
// 													<i className="fa fa-star-o" />
// 													<i className="fa fa-star-o" />
// 												</div>
// 												<div className="rating-progress">
// 													<div />
// 												</div>
// 												<span className="sum">0</span>
// 											</li>
// 											<li>
// 												<div className="rating-stars">
// 													<i className="fa fa-star" />
// 													<i className="fa fa-star" />
// 													<i className="fa fa-star-o" />
// 													<i className="fa fa-star-o" />
// 													<i className="fa fa-star-o" />
// 												</div>
// 												<div className="rating-progress">
// 													<div />
// 												</div>
// 												<span className="sum">0</span>
// 											</li>
// 											<li>
// 												<div className="rating-stars">
// 													<i className="fa fa-star" />
// 													<i className="fa fa-star-o" />
// 													<i className="fa fa-star-o" />
// 													<i className="fa fa-star-o" />
// 													<i className="fa fa-star-o" />
// 												</div>
// 												<div className="rating-progress">
// 													<div />
// 												</div>
// 												<span className="sum">0</span>
// 											</li>
// 										</ul>
// 									</div>
// 								</div>
//
// 								<div className="col-md-6">
// 									<div id="reviews">
// 										<ul className="reviews">
// 											<li>
// 												<div className="review-heading">
// 													<h5 className="name">John</h5>
// 													<p className="date">27 DEC 2018, 8:0 PM</p>
// 													<div className="review-rating">
// 														<i className="fa fa-star" />
// 														<i className="fa fa-star" />
// 														<i className="fa fa-star" />
// 														<i className="fa fa-star" />
// 														<i className="fa fa-star-o empty" />
// 													</div>
// 												</div>
// 												<div className="review-body">
// 													<p>
// 														Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
// 														labore et dolore magna aliqua
// 													</p>
// 												</div>
// 											</li>
// 											<li>
// 												<div className="review-heading">
// 													<h5 className="name">John</h5>
// 													<p className="date">27 DEC 2018, 8:0 PM</p>
// 													<div className="review-rating">
// 														<i className="fa fa-star" />
// 														<i className="fa fa-star" />
// 														<i className="fa fa-star" />
// 														<i className="fa fa-star" />
// 														<i className="fa fa-star-o empty" />
// 													</div>
// 												</div>
// 												<div className="review-body">
// 													<p>
// 														Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
// 														labore et dolore magna aliqua
// 													</p>
// 												</div>
// 											</li>
// 											<li>
// 												<div className="review-heading">
// 													<h5 className="name">John</h5>
// 													<p className="date">27 DEC 2018, 8:0 PM</p>
// 													<div className="review-rating">
// 														<i className="fa fa-star" />
// 														<i className="fa fa-star" />
// 														<i className="fa fa-star" />
// 														<i className="fa fa-star" />
// 														<i className="fa fa-star-o empty" />
// 													</div>
// 												</div>
// 												<div className="review-body">
// 													<p>
// 														Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
// 														labore et dolore magna aliqua
// 													</p>
// 												</div>
// 											</li>
// 										</ul>
// 										<ul className="reviews-pagination">
// 											<li className="active">1</li>
// 											<li>
// 												<a href="#">2</a>
// 											</li>
// 											<li>
// 												<a href="#">3</a>
// 											</li>
// 											<li>
// 												<a href="#">4</a>
// 											</li>
// 											<li>
// 												<a href="#">
// 													<i className="fa fa-angle-right" />
// 												</a>
// 											</li>
// 										</ul>
// 									</div>
// 								</div>
//
// 								<div className="col-md-3">
// 									<div id="review-form">
// 										<form className="review-form">
// 											<input className="input" type="text" placeholder="Your Name" />
// 											<input className="input" type="email" placeholder="Your Email" />
// 											<textarea className="input" placeholder="Your Review" />
// 											<div className="input-rating">
// 												<span>Your Rating: </span>
// 												<div className="stars">
// 													<input id="star5" name="rating" value="5" type="radio" />
// 													<label htmlFor="star5" />
// 													<input id="star4" name="rating" value="4" type="radio" />
// 													<label htmlFor="star4" />
// 													<input id="star3" name="rating" value="3" type="radio" />
// 													<label htmlFor="star3" />
// 													<input id="star2" name="rating" value="2" type="radio" />
// 													<label htmlFor="star2" />
// 													<input id="star1" name="rating" value="1" type="radio" />
// 													<label htmlFor="star1" />
// 												</div>
// 											</div>
// 											<button className="primary-btn">Submit</button>
// 										</form>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// </div>
