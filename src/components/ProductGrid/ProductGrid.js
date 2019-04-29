import React from "react";
import {observer} from "mobx-react";
import GridItem from "../GridItem/GridItem";

import styles from "./ProductGrid.module.scss";

const ProductGrid = ({products}) => {

	return (
		<div className={styles.grid}>
			{products.map(p => (
				<GridItem key={p.id + p.name} product={p}/>
			))}

			{!products.length ?
				<div className={styles.spinner} /> : null}
		</div>
	);
};

export default observer(ProductGrid);