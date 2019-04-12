import React from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import GridImage from "./GridImage";

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
				<GridImage image={product.image}/>
			</figure>
			<div className="content product-caption">
				<div className="product-name">{product.name}</div>
				<div className="product-price">${product.price}</div>
			</div>
		</Link>
	</div>;
};

export default observer(GridItem);


