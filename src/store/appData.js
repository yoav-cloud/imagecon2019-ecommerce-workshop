import {observable, action} from "mobx";
import bindObjectProps from "./bindObjectProps";

const getObservableWithActions = (obj) =>
	observable(...bindObjectProps(obj));

const createProduct = (data) =>
	getObservableWithActions({
		id: "",
		title: "",
		description: "",
		price: 0,
		discount: 0,
		media: [],
		...data,
	});

const products = observable([]);

const addProduct = action((product)=>
	products.push(createProduct(product)));

const cart = observable({
	//ids of
		products: [],
	},
	{

	});

export {
	createProduct,
	addProduct,
	products,
	cart,
}