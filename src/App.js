import React, {Component} from 'react';
import {observer} from "mobx-react";
import {StoreContext} from "./store/storeContext";

import './App.css';

const ProductView = observer(({product}) => {
	console.log("!!!! RENDERING PRODUCT VIEW", product.title);

	return (
		<div onClick={() => {
			product.setPrice(product.price + 1);
		}}>
			<h3>{product.title}</h3>
			<span>Price: {product.price}</span>
		</div>
	);
});

const ProductList = observer(({products}) => {

	console.log("!!!! RENDERING PRODUCT LIST");

	return (
		<div>
			{products.map((p) => <ProductView key={p.id} product={p}/>)}
		</div>
	);
});

class App extends Component {

	static contextType = StoreContext;

	componentDidMount() {

		const store = this.context;

		store.appData.addProduct({
			id: "am3",
			title: "Air Max 3",
		});

		store.appData.addProduct({
			id: "aj7",
			title: "Air Jordan 7",
		});
	}

	render() {
		console.log("!!!! RENDERING APP");

		return (
			<div className="App">
				<header className="App-header">
					<h1>Cloudinary's Ecommerce Store</h1>
				</header>

				<ProductList products={this.context.appData.products}/>
			</div>
		);
	}
}

export default App;
