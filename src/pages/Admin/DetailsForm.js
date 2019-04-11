import React, { useCallback } from "react";
import cx from "classnames";
import { TYPES } from "./consts";
import BrandsSelect from "./BrandsSelect";
import styles from "./Admin.module.scss";

const DetailsForm = (props) => {
	// const [name, setName] = useState("");
	// const [price, setPrice] = useState(0);
	// const [brand, setBrand] = useState("");
	// const [discount, setDiscount] = useState(0);
	//
	// const setters = {
	// 	name: setName,
	// 	price: setPrice,
	// 	brand: setBrand,
	// 	discount: setDiscount,
	// };

	const onFormChange = useCallback((e) => {
		const name = e.target.name,
			value = e.target.value;

		props.dispatch({
			type: TYPES.SET_DETAILS,
			payload: {
				[name]: value,
			},
		})
		// if (setters[name]){
		// 	console.log(`setting ${name} to value: ${value}`);
		// 	setters[name](value);
		// }
	}, []);

	return (
		<div className={styles.admin}>
			<div className={styles.newProductForm}>
				<fieldset className={styles.details}>
					<legend align="center">Product Details</legend>

					<div className={styles.inputWrapper}>
						<div className={styles.formRow}>
							<label>Name</label>
							<input name="name" type="text" value={props.name} onChange={onFormChange}/>
						</div>
						<div className={styles.formRow}>
							<label>Brand</label>
							<BrandsSelect value={props.brand} onChange={onFormChange}/>
						</div>

						<div className={styles.priceContainer}>
							<div className={cx(styles.formRow, styles.formRowPrice)}>
								<label>Price</label>
								<input name="price" type="number" min="0" value={props.price}
								       onChange={onFormChange}/>
							</div>
							<div className={styles.formRow}>
								<label>Discount</label>
								<input name="discount" type="number" min="0" max="100"
								       value={props.discount} onChange={onFormChange}/>
							</div>
						</div>
					</div>
				</fieldset>
			</div>
		</div>
	);
};

export default DetailsForm;