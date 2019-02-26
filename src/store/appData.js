import {observable, action} from "mobx";
import bindObjectProps from "./bindObjectProps";
import request from "../services/api";

const getObservableWithActions = (obj) =>
	observable(...bindObjectProps(obj));

const createProduct = (data) =>
	getObservableWithActions({
		id: "",
		name: "",
		price: 0,
		discount: 0,
		items: [],
		...data,
	});

const products = observable([]);

const addProduct = action((...newProducts) => {
	products.replace(products.concat(newProducts));
	console.log("!!!!! APP DATA !!!!!!!! products = ", products);
});

const fetchProducts = () => {
	request("/products")
		.then((result) => {
			addProduct(...result.products);
		})
		.catch((error) => {
			console.log("!!!!!!!!!! ERROR ", error);
		});
};

const cart = observable({
		//ids of
		products: [],
	},
	{});

export {
	createProduct,
	addProduct,
	fetchProducts,
	products,
	cart,
}