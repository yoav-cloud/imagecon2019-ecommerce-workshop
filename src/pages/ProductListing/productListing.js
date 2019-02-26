import React, {useEffect} from "react";
import {inject, observer} from "mobx-react";

const ProductView = observer(({ product }) => {
	console.log("!!!! RENDERING PRODUCT VIEW", product.name);

	return (
		<div
			onClick={() => {
				// product.setPrice(product.price + 1);
			}}
		>
			<h3>{product.name}</h3>
			<span>Price: {product.price}</span>
		</div>
	);
});

const ProductList = observer(({ products }) => {
	console.log("!!!! RENDERING PRODUCT LIST", products);

	return (
		<div>
			{products.map(p => (
				<ProductView key={p.id} product={p} />
			))}
		</div>
	);
});


const ProductListingPage = (props) => {

	// const products = props.appData.products;

	useEffect(() => {
		props.appData.fetchProducts();
	}, []);

	// console.log("!!!!!!!!!!!!!!!!!! rendering PLP component", props);

	return <div>
		<h1>PLP !!!!!!!!!!</h1>

		{/*found {props.appData.products.length} Products !!!!!!!*/}

		<ProductList products={props.appData.products}/>
	</div>
};


export default inject("appData")(ProductListingPage);