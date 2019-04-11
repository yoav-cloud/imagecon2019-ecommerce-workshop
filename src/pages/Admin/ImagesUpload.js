import React from "react";
import styles from "./Admin.module.scss";

const ImagesUpload = () => {

	return (
		<div className={styles.admin}>
			<div className={styles.newProductForm}>
				<fieldset className={styles.images}>
					<legend align="center">Product Images</legend>
					{/*<div className={styles.imagesContainer}>{this.renderProductImagesWidget()}</div>*/}
				</fieldset>
			</div>
		</div>);
};

export default ImagesUpload;

// renderProductImagesWidget = () => (
//   <div className={styles.thumbsList}>
//     <Button title="Add An Image" onClick={() => this.uploadWidget && this.uploadWidget.open && this.uploadWidget.open()} />
//
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