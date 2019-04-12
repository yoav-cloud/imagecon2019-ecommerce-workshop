import React, { Fragment, useEffect } from "react";
import { inject, } from "mobx-react";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import HomeSlider from "../../components/HomeSlider/HomeSlider";

const products = [
	{
		id: "demo7",
		name: "Demo Mens 7 Running Shoes",
		price: 115,
		discount: 10,
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
};

export default inject("appData")(ProductListingPage);


