import React, { Fragment } from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import ProductGallery from "../../components/ProductGallery/ProductGallery";
import Description from "./Description";
import Related from "./Related";
import Info from "./Info";

const ProductDetail = ({ location }: Object) => {
	const product = location.state ? location.state.product : {};

	const imageItem = product.items.find((item) => item.resourceType === "image");

	return (
		<Fragment>
			<section className="section section-product">
				<div className="container">
					<div className="columns">
						<div className="column is-7">
							<Breadcrumb />
							<ProductGallery image={imageItem.secureUrl}/>
							{/* gallerymedia :: send product items to product gallery */}
						</div>
						<div className="column is-5">
							<Info product={product}/>
						</div>
					</div>
				</div>
			</section>

			<Description name={product.name}/>
			<Related/>
		</Fragment>);
};

export default ProductDetail;
