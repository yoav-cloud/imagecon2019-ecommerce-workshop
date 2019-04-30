import React from "react";
import { toJS } from "mobx";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import GridImage from "./GridImage";
import { calculateDiscountPrice } from "../../helpers";
import cx from "classnames";

import styles from "./GridItem.module.scss";

const ProductPrice = ({ price, isDiscounted }) => (
	<div className={cx("product-price", { [styles.discounted]: isDiscounted })}>
		${price}
	</div>);

const GridItem = ({ product }) => {
	const discountedPrice = calculateDiscountPrice(product),
		isDiscounted = discountedPrice !== product.price;

	const imageItem = product.items.find((item) => item.resourceType === "image");

	return (
		<div
			className="column is-6-mobile is-4-tablet is-3-desktop is-3-widescreen is-3-fullhd available">
			<Link
				to={{
					pathname: "/product",
					state: {
						product: toJS(product)
					}
				}}
			>
				<figure className="image" style={{ height: "280px" }}>
					{product.isNew && <div className="tags"><span className="tag">New</span></div>}
					<GridImage item={imageItem} />
				</figure>
				<div className="content product-caption">
					<div className="product-name">{product.name}</div>
					<div className={styles.price}>
						<ProductPrice price={product.price} isDiscounted={isDiscounted}/>
						{isDiscounted && <ProductPrice price={discountedPrice}/>}
					</div>
				</div>
			</Link>
		</div>);
};

export default observer(GridItem);

