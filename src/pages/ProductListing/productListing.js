import React, { Fragment, useEffect } from "react";
import { inject, observer, } from "mobx-react";
import { useObservable, useObserver } from "mobx-react-lite";
import ProductGrid from "../../components/ProductGrid/productGrid";
import HomeSlider from "../../components/HomeSlider/HomeSlider";

const products = [
	{
		id: "demo7",
		name: "Demo Mens 7 Running Shoes",
		price: 115,
		image: "images/7.jpg",
	},
	{
		id: "demo7",
		name: "Demo Mens 4 Running Shoe",
		price: 99,
		image: "images/4.jpg",
	},
	{
		id: "demo7",
		name: "Demo Mens 1 Running Shoes",
		price: 155.99,
		image: "images/1.jpg",
		isNew: true,
	},
	{
		id: "demo7",
		name: "Demo Mens 3 Running Shoes",
		price: 84.59,
		image: "images/3(1).jpg",
	},
	{
		id: "demo7",
		name: "Demo Mens 5 Running Shoes",
		price: 59.4,
		image: "images/5.jpg",
	},
	{
		id: "demo7",
		name: "DJI Mavic Pro",
		price: 99.9,
		image: "images/71kFJph6q9L._SL1500_.jpg",
	},
	{
		id: "demo7",
		name: "Demo Mens 2 Running Shoes",
		price: 64,
		image: "images/2.jpg",
	},
	{
		id: "demo7",
		name: "Demo Mens 6 Running Shoes",
		price: 177,
		image: "images/6.jpg",
	},
];


const ProductListingPage = (props) => {

	useEffect(() => {
		props.appData.fetchProducts();
	}, []);

	return <Fragment>
		<HomeSlider/>
		<section className="section">
			<div className="container">
				<div className="title is-4 has-text-centered">BEST SELLERS</div>
				<div className="columns is-multiline is-mobile products is-centered">
					<ProductGrid products={products}/>
				</div>
				<div className="load-more"></div>
			</div>
		</section>
	</Fragment>;


	//
	//
	//
	// <div className="section">
	// 	<div className="container">
	// 		<div className="row">
	// 			<div id="aside" className="col-md-3">
	// 			</div>
	//
	// 			<div id="store" className="col-md-9">
	// 				<div className="store-filter clearfix">
	// 					<div className="store-sort">
	// 						<label>
	// 							Sort By:
	// 							<select className="input-select">
	// 								<option value="0">Popular</option>
	// 								<option value="1">Position</option>
	// 							</select>
	// 						</label>
	//
	// 						<label>
	// 							Show:
	// 							<select className="input-select">
	// 								<option value="0">20</option>
	// 								<option value="1">50</option>
	// 							</select>
	// 						</label>
	// 					</div>
	// 					<ul className="store-grid">
	// 						<li className="active"><i className="fa fa-th"/></li>
	// 						<li><a href="#"><i className="fa fa-th-list"/></a></li>
	// 					</ul>
	// 				</div>
	//
	// 				<ProductGrid products={props.appData.products} />
	//
	// 				<div className="store-filter clearfix">
	// 					{useObserver(()=> <span className="store-qty">
	// 						Showing {props.appData.products.length} products</span>)}
	// 					<ul className="store-pagination">
	// 						<li className="active">1</li>
	// 						<li><a href="#">2</a></li>
	// 						<li><a href="#">3</a></li>
	// 						<li><a href="#">4</a></li>
	// 						<li><a href="#"><i className="fa fa-angle-right"></i></a></li>
	// 					</ul>
	// 				</div>
	// 			</div>
	// 		</div>
	// 	</div>
	// </div>;
	//
	//
};


export default inject("appData")(ProductListingPage);

