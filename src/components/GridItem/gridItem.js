import React from "react";
import {observer} from "mobx-react";

import styles from "./gridItem.module.scss";

const calculateDiscountPrice = ({price, discount}) =>
	parseFloat(price) * (parseFloat(discount) / 100);

const GridItem = ({ product }) => {
	console.log("!!!! RENDERING PRODUCT VIEW", product.name);

	return (
		<div className={styles.product}>
			<div className={styles.image}>
				<img src="./img/product01.png" alt="" />
					<div className={styles.label}>
						{product.discount ?
							<span className="sale">-{product.discount}%</span> : null}
						<span className="new">NEW</span>
					</div>
			</div>
			<div className={styles.body}>
				<p className={styles.category}>Category</p>
				<h3 className={styles.name}>
					<a href="#">{product.name}</a>
				</h3>
				<h4 className={styles.price}>
					{product.discount ?
						calculateDiscountPrice(product) : product.price}
					{product.discount ?
						<del className={styles["old-price"]}>{product.price}</del> : null}
				</h4>

				<div className={styles.buttons}>
					<button className="add-to-wishlist">
						<i className="fa fa-heart-o"/>
						<span className={styles.tooltipp}>add to wishlist</span>
					</button>
					<button className="add-to-compare">
						<i className="fa fa-exchange"/>
						<span className={styles.tooltipp}>add to compare</span>
					</button>
					<button className="quick-view">
						<i className="fa fa-eye"/>
						<span className={styles.tooltipp}>quick view</span>
					</button>
				</div>
			</div>
			<div className={styles["add-to-cart"]}>
				<button className={styles["add-to-cart-btn"]}>
					<i className="fa fa-shopping-cart"/> add to cart
				</button>
			</div>
		</div>
	);
};

export default observer(GridItem);