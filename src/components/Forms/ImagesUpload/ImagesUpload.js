import React from "react";
import cx from "classnames";
import Button from "../../../components/Button/Button";
import styles from "../forms.module.scss";

const ImagesUpload = ({items}) => {
	return (
		<div className={styles.newProductForm}>
			<fieldset className={styles.images}>
				<legend>Product Images</legend>

				<div className={cx(styles.inputWrapper, styles.imagesWrapper)}>

					<Button title="Add An Image"/>


				</div>
				{/*<div className={styles.imagesContainer}>{this.renderProductImagesWidget()}</div>*/}
			</fieldset>
		</div>
	);
};

export default ImagesUpload;

// renderProductImagesWidget = () => (
//   <div className={styles.thumbsList}>
//     {this.state.items.map(item => (
//       <div className={styles.thumbWrapper}>
//         <img
//           src={cloudinaryService.url(item.public_id, {
//             resource_type: item.resource_type,
//             type: item.type,
//             ...PRODUCT_IMAGE_PREVIEW_TRANSFORMATION
//           })}
//           key={item.resource_id}
//         />
//       </div>
//     ))}
//   </div>
// );