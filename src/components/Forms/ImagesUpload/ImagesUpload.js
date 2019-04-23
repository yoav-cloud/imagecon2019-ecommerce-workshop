import React, { memo, useLayoutEffect, useState, useRef } from "react";
import cx from "classnames";
import Button from "../../../components/Button/Button";
import styles from "../forms.module.scss";
import cloudinary from "../../../services/cloudinary";
import { getRandomFolderName } from "../../../helpers";
import { init as initUploadWidget } from "../../../services/uploadwidget";
import { MAX_UPLOADS, TYPES, UPLOAD_PREVIEW } from "../../../consts";

const ImagesUpload = ({ dispatch }) => {
	const [items, setItems] = useState([]);
	const widgetRef = useRef();

	useLayoutEffect(() => {
		const widget = initUploadWidget({
			folder: `Products/${getRandomFolderName()}`,
			maxFiles: MAX_UPLOADS,
			callback: (error, result) => {
				if (result && result.event === "success") {
					setItems((latestItems) => [...latestItems, result.info]);
					dispatch({ type: TYPES.ADD_UPLOAD, payload: result.info });
				}

				if (result && result.event === "queues-end") {
					widget.close();
				}
			}
		});

		widgetRef.current = widget;
	}, []);

	return (
		<div className={styles.newProductForm}>
			<fieldset className={styles.images}>
				<legend>Product Images</legend>

				<div className={cx(styles.inputWrapper, styles.imagesWrapper)}>
					<Button title="Add An Image" onClick={() => {
						widgetRef.current.open();
					}}/>

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