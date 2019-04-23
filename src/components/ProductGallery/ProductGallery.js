import React, { useLayoutEffect } from "react";
import { CLOUD, SALE, BRAND} from "../../consts";

const ProductGallery = ({ image }) => {
	return (
		<div className="image-gallery " aria-live="polite">
			<div className="image-gallery-content">
				<div className="image-gallery-slide-wrapper left">
					<div className="image-gallery-slides">
						<div className="image-gallery-slide center"
						     role="button"
						     style={{ transform: "translate3d(0%, 0px, 0px)" }}>
							<div className="image-gallery-image">
								<img src={image} alt=""/></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductGallery;
