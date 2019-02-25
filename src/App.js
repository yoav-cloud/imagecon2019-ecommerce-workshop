import React, {Component} from "react";
import {observer, inject} from "mobx-react";
import {Switch, Route} from "react-router"
import {Link} from "react-router-dom";


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

const Home = () =>
	<div>
		<h1>HOME!!!!</h1>
		<Link to={{
			pathname: "about",
			state: {
				product: "aaa",
			}
		}}>About</Link>
	</div>;


const About = inject("routing")((props) => {

	console.log("!!!!!!!!!!!! ABOUT PROPS = ", props);

	return <div>
		<h1>ABOUT!!!!</h1>

		<div>

		</div>

		<Link to="/">Home</Link>
	</div>
});

class App extends Component {

	// static contextType = StoreContext;

	componentDidMount() {
		const appData = this.props.appData;

		// const store = this.context;
		appData.addProduct({
			id: "am3",
			title: "Air Max 3",
		});

		appData.addProduct({
			id: "aj7",
			title: "Air Jordan 7",
		});
	}

	render() {
		console.log("!!!! RENDERING APP", this.props);

		return (
			<div className="App">

				<Switch>
					<Route exact path="/" component={Home}/>
					<Route path="/about" component={About}/>
					{/*<Route path="/:user" component={User}/>*/}
					{/*<Route component={NoMatch}/>*/}
				</Switch>


				{/*<header className="App-header">*/}
				{/*<h1>Cloudinary's Ecommerce Store</h1>*/}
				{/*</header>*/}

				{/*<ProductList products={this.props.appData.products}/>*/}
			</div>
		);
	}
}

export default inject("appData")(App);
