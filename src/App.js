import React from "react";
import { inject } from "mobx-react";
import { Switch, Route } from "react-router";
import { Link } from "react-router-dom";
import Admin from "./pages/Admin/Admin";
import ProductListingPage from "./pages/ProductListing/ProductListing";
import ProductPage from "./pages/ProductDetail/ProductDetail";

const AdminLink = () => <div className="adminLink">
	<Link
		to={{
			pathname: "/admin",
		}}>
		<img src="images/settings.svg"/>
	</Link>
</div>;

const App = (props) => {

	return (
		<div className="App">

			{!~props.routing.location.pathname.indexOf("admin") ?
				<AdminLink/> : null}

			<Switch>
				<Route exact path="/" component={ProductListingPage}/>
				<Route path="/product" component={ProductPage}/>
				<Route path="/admin" component={Admin}/>
			</Switch>
		</div>);
};

export default inject("appData", "routing")(App);
