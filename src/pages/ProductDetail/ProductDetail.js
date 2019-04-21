import React, { Fragment } from "react";
import { camelCase } from "lodash";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import ProductGallery from "../../components/ProductGallery/ProductGallery";
import Description from "./Description";
import Related from "./Related";
import Info from "./Info";

const getMediaAssets = (product) =>
	product.items.map(item =>
		Object.keys(item).map((key) => camelCase(key)));

const ProductDetail = ({ location }: Object) => {
	const product = location.state ? location.state.product : {};

	return (
		<Fragment>
			<section className="section section-product">
				<div className="container">
					<div className="columns">
						<div className="column is-7">
							<Breadcrumb />
							<ProductGallery mediaAssets={getMediaAssets(product)} />
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