/* eslint-disable */
import React, { memo, useLayoutEffect, useState, useRef } from "react";
import cx from "classnames";
import Button from "../../../components/Button/Button";
import styles from "../forms.module.scss";
import cloudinary from "../../../services/cloudinary";
import { getRandomFolderName } from "../../../helpers";
import { CLOUD, MAX_UPLOADS, PRESET, TYPES, UPLOAD_PREVIEW } from "../../../consts";

const ImagesUpload = ({ dispatch }) => {
	const [items, setItems] = useState([]);
	const widgetRef = useRef();

	useLayoutEffect(() => {
		widgetRef.current = self.cloudinary.createUploadWidget({
				cloudName: CLOUD,
				uploadPreset: PRESET,

				folder: `Products/${getRandomFolderName()}`,
				maxFiles: MAX_UPLOADS,

				styles: {
					palette: {
						window: "#F7F0F0",
						sourceBg: "#788278",
						windowBorder: "#C3D0C1",
						tabIcon: "#000000",
						inactiveTabIcon: "#555a5f",
						menuIcons: "#555a5f",
						link: "#5DA741",
						action: "#63A214",
						inProgress: "#0D752E",
						complete: "#339933",
						error: "#cc0000",
						textDark: "#000000",
						textLight: "#fcfffd"
					},
				},
			},
			(error, result) => {
				if (result && result.event === "success") {
					setItems((latestItems) => [...latestItems, result.info]);
					dispatch({ type: TYPES.ADD_UPLOAD, payload: result.info });
				}

				if (result && result.event === "queues-end") {
					widgetRef.current.close();
				}
			});
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
							})} alt={item.public_id}
							     title={item.public_id}
							     key={item.public_id}/>)}
					</div>
				</div>
			</fieldset>
		</div>
	);
};

export default memo(ImagesUpload);