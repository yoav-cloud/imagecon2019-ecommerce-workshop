import React from "react";
// import { toJS } from "mobx";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
// import cloudinary from "../../services/cloudinary";
// import { calculateDiscountPrice } from "../../helpers";

// import styles from "./gridItem.module.scss";

// const renderProductImage = ({ name, items }) => {
//   const image = items.find(i => i.resource_type === "image");
//
//   const url = image
//     ? cloudinary.url(image.public_id, {
//         crop: "fit",
//         width: 260,
//         dpr: 2
//       })
//     : null;
//
//   return url && <img src={url} alt={name} />;
// };

const GridItem = ({ product }) => {

	// const discount = parseFloat(product.discount);

	return <div
		className="column is-6-mobile is-4-tablet is-3-desktop is-3-widescreen is-3-fullhd available">
		<Link
			to={{
				pathname: "/product",
				state: {
					product //: toJS(product)
				}
			}}
		>
			<figure className="image" style={{ height: "280px" }}>
				{product.isNew && <div className="tags"><span className="tag">New</span></div>}
				<img src={product.image}/>
			</figure>
			<div className="content product-caption">
				<div className="product-name">{product.name}</div>
				<div className="product-price">${product.price}</div>
			</div>
		</Link>
	</div>;

	//
	// (<div className={styles.product}>
	// 		<Link
	// 			to={{
	// 				pathname: "/product",
	// 				state: {
	// 					product: toJS(product)
	// 				}
	// 			}}
	// 		>
	// 			<div className={styles.image}>
	// 				{renderProductImage(product)}
	// 				<div className={styles.label}>
	// 					{discount ?
	// 						<span className={styles.sale}>-{product.discount}%</span> : null}
	// 					<span className={styles.new}>NEW</span>
	// 				</div>
	// 			</div>
	// 		</Link>
	//
	// 		<div className={styles.body}>
	// 			<p className={styles.category}>Category</p>
	// 			<h3 className={styles.name}>
	// 				<a href="#">{product.name}</a>
	// 			</h3>
	// 			<h4 className={styles.price}>
	// 				${discount ? calculateDiscountPrice(product) : product.price}
	// 				{discount ?
	// 					<del className={styles["old-price"]}>${product.price}</del> : null}
	// 			</h4>
	// 	</div>
	// );
};

export default observer(GridItem);


