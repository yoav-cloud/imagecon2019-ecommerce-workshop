import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import createBrowserHistory from "history/createBrowserHistory";
import { Provider } from "mobx-react";
import { RouterStore, syncHistoryWithStore } from "mobx-react-router";
import { Router } from "react-router";
import initStore from "./store/store";
// import StoreContextProvider from "./store/storeContext";

import "./index.css";

const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();

const history = syncHistoryWithStore(browserHistory, routingStore);

const stores = {
	routing: routingStore,
	...initStore()
};

ReactDOM.render(
	<Provider {...stores}>
		<Router history={history}>
			<App />
		</Router>
	</Provider>,
	document.getElementById("root"));

// {/*<StoreContextProvider store={store}>*/}
// {/*<App/>*/}
// {/*</StoreContextProvider>,*/}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
