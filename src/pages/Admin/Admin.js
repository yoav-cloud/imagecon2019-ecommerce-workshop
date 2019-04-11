import React, { useCallback, useReducer } from "react";
import cx from "classnames";
import { inject } from "mobx-react";
import { pick } from "lodash";
import request from "../../services/api";
import getReducer from "../../genericReducer";
// import { getRandomString } from "../../helpers";
// import { init as initMediaLibraryWidget } from "../../services/mlwidget";
// import { init as initUploadWidget } from "../../services/uploadwidget";
// import cloudinaryService from "../../services/cloudinary";
import DetailsForm from "./DetailsForm";
import ImagesUpload from "./ImagesUpload";

import {
	TYPES,
	MAX_UPLOADS,
	PRODUCT_ATTRIBUTES,
	STATUS_MESSAGE
} from "./consts";

import styles from "./Admin.module.scss";

const initialState = {
	name: "",
	price: 0,
	brand: "",
	discount: 0,
	items: [],
	status: "",
	maxUploads: MAX_UPLOADS,
};

const reducers = {
	[TYPES.SET_DETAILS]: (state, payload) => ({...state,...payload}),
	[TYPES.SET_STATUS]: (state, payload) => ({...state, status: payload}),

	// const getMaxUploadsAllowed = (items) => {
// 	return MAX_UPLOADS - items; //this.state.items.length;
// };
};

const reducer = getReducer(reducers);

const Admin = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const onSubmit = useCallback(async () => {
		await request("/products", {
			method: "POST",
			bodyParams: {
				...pick(state, PRODUCT_ATTRIBUTES),
				items: state.items.map(item => ({
					id: item.public_id,
					type: item.resource_type
				}))
			}
		});

		dispatch({type: TYPES.SET_STATUS, payload: "success"});
	});

	return (
		<section className={cx(styles.adminSection, "section")}>
			<h1>Add Product</h1>

			<div className={styles.formContainer}>
				<DetailsForm {...state} dispatch={dispatch}/>
				<ImagesUpload/>
			</div>

			<button className={styles.saveBtn} onClick={onSubmit}>
				Save Details
			</button>

			<div className={styles[`${state.status}`]}>
				{STATUS_MESSAGE[state.status]}
			</div>
		</section>
	);
};


// mlWidget = {};
// uploadWidget = {};


// async componentDidMount() {
// 	this.mlWidget = await initMediaLibraryWidget();
//
// 	this.uploadWidget = initUploadWidget({
// 		maxFiles: this.getMaxUploadsAllowed(),
// 		folder: `Products/${getRandomString()}`,
// 		callback: this.uwCallback,
// 	});
// }

// componentDidUpdate(prevProps: Props, prevState: State) {
// 	if (prevState.items.length !== this.state.items.length) {
// 		this.uploadWidget.update({ maxFiles: this.getMaxUploadsAllowed() });
// 	}
// }

// uwCallback = (error, result) => {
// 	if (result && result.event === "success") {
// 		this.setState((prevState: Object) => ({ items: [...prevState.items, result.info] }));
// 	} else if (result && result.event === "queues-end") {
// 		this.uploadWidget.close();
// 	}
// };


export default inject("appData")(Admin);
