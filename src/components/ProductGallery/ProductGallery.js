import React, { useLayoutEffect } from "react";
import { CLOUD, SALE, BRAND} from "../../consts";

const galleryTransformation = {
	transformation: [
		{ variables: [["$discount", "ctx:!discount!"], ["$brand", "ctx:!brand!"]] },
		{ width: 1000, height: 1000, crop: "fill", gravity: "auto" },
		...SALE,
		...BRAND,
	]
};

const ProductGallery = ({ mediaAssets }) => {
	useLayoutEffect(() => {

		const gw = window.cloudinary.galleryWidget({
			container: ".image-gallery-content",
			cloudName: CLOUD,

			mediaAssets: mediaAssets.map(asset => ({
				...asset,
				transformation: galleryTransformation,
			})),

			carouselLocation: "bottom",
			carouselOffset: 10,
			navigation: "always",
			aspectRatio: "square",
			thumbnailProps: {
				spacing: 18,
				width: 83,
				height: 80,
				selectedBorderColor: "#56d127",
				selectedBorderPosition: "top-bottom"
			},
			zoom: true,
			zoomProps: {
				trigger: "click",
				level: 2
			},
			placeholderImage: false,
		});

		gw.render();

		return () => {
			gw.destroy();
		}
	}, []);

	return (
		<div className="image-gallery " aria-live="polite">
			<div className="image-gallery-content">
			</div>
		</div>
	);
};

export default ProductGallery;
