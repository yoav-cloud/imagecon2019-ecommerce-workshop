import React from "react";
import {observer} from "mobx-react";
import GridItem from "../GridItem/gridItem";

import styles from "./productGrid.module.scss";

const ProductGrid = ({products}) => {
	console.log("!!!! RENDERING PRODUCT Grid", products);

	return (
		<div className={styles.grid}>
			{products.map(p => (
				<GridItem key={p.id + p.name} product={p}/>
			))}
		</div>
	);
};

export default observer(ProductGrid);