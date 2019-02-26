import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Switch, Route } from "react-router";
import { Link } from "react-router-dom";
import Admin from "./pages/Admin/Admin";
import ProductListingPage from "./pages/ProductListing/productListing";



// const Home = () => (
//   <div>
//     <h1>HOME!!!!</h1>
//     <Link
//       to={{
//         pathname: "about",
//         state: {
//           product: "aaa"
//         }
//       }}
//     >
//       About
//     </Link>
//   </div>
// );

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

class App extends Component {
  // static contextType = StoreContext;

  // componentDidMount() {
  //   const appData = this.props.appData;
  //
  //   // const store = this.context;
  //   appData.addProduct({
  //     id: "am3",
  //     title: "Air Max 3"
  //   });
  //
  //   appData.addProduct({
  //     id: "aj7",
  //     title: "Air Jordan 7"
  //   });
  // }

  render() {
    console.log("!!!! RENDERING APP", this.props);

    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={ProductListingPage} />
          <Route path="/product" component={About} />
          <Route path="/admin" component={Admin} />
          {/*<Route path="/:user" component={User}/>*/}
          {/*<Route component={NoMatch}/>*/}
        </Switch>

        {/*<header className="App-header">*/}
        {/*<h1>Cloudinary's Ecommerce Store</h1>*/}
        {/*</header>*/}
      </div>
    );
  }
}

export default inject("appData")(App);
