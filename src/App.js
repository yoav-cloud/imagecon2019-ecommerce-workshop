import React from "react";
import { inject } from "mobx-react";
import { Switch, Route } from "react-router";
import { Link } from "react-router-dom";
import Admin from "./pages/Admin/Admin";
import ProductListingPage from "./pages/ProductListing/productListing";
import ProductPage from "./components/Product/Product";

const About = inject("routing")(props => {
  console.log("!!!!!!!!!!!! ABOUT PROPS = ", props);

  return (
    <div>
      <h1>ABOUT!!!!</h1>

      <div />

      <Link to="/">Home</Link>
    </div>
  );
});

const App = () => (
  <div className="App">
    <Switch>
      <Route exact path="/" component={ProductListingPage} />
      <Route path="/product" component={ProductPage} />
      <Route path="/admin" component={Admin} />
      {/*<Route path="/:user" component={User}/>*/}
      {/*<Route component={NoMatch}/>*/}
    </Switch>
  </div>
);

export default inject("appData")(App);
