import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import createBrowserHistory from "history/createBrowserHistory";
import { Provider } from "mobx-react";
import { RouterStore, syncHistoryWithStore } from "mobx-react-router";
import { Router } from "react-router";
import initStore from "./store/store";

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
