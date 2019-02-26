import React from "react";
import { inject } from "mobx-react";
import { Switch, Route } from "react-router";
import Admin from "./pages/Admin/Admin";
import ProductListingPage from "./pages/ProductListing/productListing";
import ProductPage from "./components/Product/Product";

const App = () => (
  <div className="App">
    <Switch>
      <Route exact path="/" component={ProductListingPage} />
      <Route path="/product" component={ProductPage} />
      <Route path="/admin" component={Admin} />
      {/*<Route component={NoMatch}/>*/}
    </Switch>
  </div>
);

export default inject("appData")(App);
