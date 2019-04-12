import React from "react";
import cx from "classnames";
import { calculateDiscountPrice } from "../../helpers";

import styles from "./ProductDetail.module.scss";

const ProductPrice = ({ price, isDiscounted }) => (
	<div className={cx("product-price", { [styles.discounted]: isDiscounted })}>
		${price}
	</div>);

const Info = ({ product }) => {
	console.log("rendering product !!!!!!!", product);

	const discountedPrice = calculateDiscountPrice(product),
		isDiscounted = discountedPrice !== product.price;

	return (
		<div className="content">
			<h1 className="title is-4 product-name">{product.name}</h1>

			<div className={styles.price}>
				<ProductPrice price={product.price} isDiscounted={isDiscounted}/>
				{isDiscounted && <ProductPrice price={discountedPrice}/>}
			</div>

			<div>Qty</div>
			<div className="product-quantity">
				<a className="decrement"></a>
				<input maxLength="3" type="number" pattern="\d*" value="1"
				       onChange={() => {
				       }}/>
				<a className="increment"></a></div>
			<div className="button-addtocart">
				<button className="button is-success is-fullwidth">Add to cart
				</button>
			</div>
		</div>
	)
};

export default Info;