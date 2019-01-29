import React, {createContext} from 'react';

export const StoreContext = createContext({});

export const StoreConsumer = (Component) =>
	<StoreContext.Consumer>
		{(store) => <Component store={store}/>}
	</StoreContext.Consumer>;

export default (props) => {
	return <StoreContext.Provider value={props.store}>
		{props.children}
	</StoreContext.Provider>;
};


