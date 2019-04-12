import React, { useCallback, useReducer } from "react";
import cx from "classnames";
import { inject } from "mobx-react";
import { pick } from "lodash";
import {
	TYPES,
	MAX_UPLOADS,
	PRODUCT_ATTRIBUTES,
	STATUS_MESSAGES
} from "../../consts";
import request from "../../services/api";
import getReducer from "../../genericReducer";
import Button from "../../components/Button/Button";
import DetailsForm from "../../components/Forms/DetailsForm/DetailsForm";
import ImagesUpload from "../../components/Forms/ImagesUpload/ImagesUpload";

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
	[TYPES.SET_DETAILS]: (state, payload) => ({ ...state, ...payload }),
	[TYPES.SET_STATUS]: (state, payload) => ({ ...state, status: payload }),
};

const reducer = getReducer(reducers);

const Admin = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const onSubmit = useCallback(async () => {
		await request("/products", {
			method: "POST",
			data: {
				...pick(state, PRODUCT_ATTRIBUTES),
				items: state.items.map(item => ({
					id: item.public_id,
					type: item.resource_type
				}))
			}
		});

		dispatch({ type: TYPES.SET_STATUS, payload: "success" });
	});

	return (
		<section className={cx(styles.adminSection, "section")}>
			<h1>Add Product</h1>

			<div className={styles.formContainer}>
				<DetailsForm {...state} dispatch={dispatch}/>
				<ImagesUpload/>

				<div className={cx(styles.status, styles[`${state.status}`])}>
					{STATUS_MESSAGES[state.status]}
				</div>
			</div>

			<Button action
			        title="Save Details"
			        onClick={onSubmit}/>
		</section>
	);
};

export default inject("appData")(Admin);
