import React, { memo, useEffect, useState, useRef } from "react";
import cx from "classnames";
import Button from "../../../components/Button/Button";
import styles from "../forms.module.scss";
import cloudinary from "../../../services/cloudinary";
import { getRandomString } from "../../../helpers";
import { init as initUploadWidget } from "../../../services/uploadwidget";
import { MAX_UPLOADS, TYPES, UPLOAD_PREVIEW } from "../../../consts";

const ImagesUpload = ({ dispatch }) => {
	const [items, setItems] = useState([]);
	const widgetRef = useRef();

	// console.log("!!!!!!!!!!!!! RENDERING IMAGES UPLOAD ", items);

	useEffect(() => {
		const uploaded = items;

		console.log("!!!!!!!!! about to add upload widget !!!!", uploaded);

		if (!widgetRef.current) {
			const widget = initUploadWidget({
				folder: `Products/${getRandomString()}`,
				maxFiles: MAX_UPLOADS,
				callback: (error, result) => {

					console.log("!!!!!!!!!!!! UW CALLBACK ITEMS = ", uploaded);

					if (result && result.event === "success") {
						setItems([...uploaded, result.info]);
						dispatch({ type: TYPES.ADD_UPLOAD, payload: result.info });

						widget.update({
							maxFiles: Math.min((MAX_UPLOADS - uploaded.length), 0),
						});
					}

					if (result && result.event === "queues-end") {
						widget.close();
					}
				}
			});

			widgetRef.current = widget;
		}
	}, [items]);

	return (
		<div className={styles.newProductForm}>
			<fieldset className={styles.images}>
				<legend>Product Images</legend>

				<div className={cx(styles.inputWrapper, styles.imagesWrapper)}>
					<Button title="Add An Image" onClick={() => {widgetRef.current.open()}} />

					<div className={styles.thumbsWrapper}>
						{items.map((item) =>
							<img src={cloudinary.url(item.public_id, {
								resource_type: item.resource_type,
								type: item.type,
								...UPLOAD_PREVIEW
							})} alt={item.public_id} key={item.public_id}/>)}
					</div>
				</div>
			</fieldset>
		</div>
	);
};

export default memo(ImagesUpload);