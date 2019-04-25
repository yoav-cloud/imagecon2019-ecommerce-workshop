import React, { useLayoutEffect } from "react";
import { CLOUD } from "../../consts";

const SALE = [
	{
		variables: [
			["$discount", "ctx:!discount!"],
			["$brand", "ctx:!brand!"]]
	},
	{ if: "$discount_ne_!0!" },
	{
		overlay: "badge",
		width: 300,
		flags: "relative",
		effect: "colorize",
		color: "rgb:CC0000"
	},
	{ overlay: "text:arial_80_bold:$(discount)%2525", color: "white" },
	{ gravity: "center", x: -50, flags: "layer_apply" },
	{ gravity: "north_east", x: 30, y: 30, angle: -20, flags: "layer_apply" },
	{ if: "end" },
];

const BRAND = [
	{ overlay: "$brand", width: 500 },
	{
		gravity: "south_west", x: 30, y: -30,
		flags: "layer_apply"
	}
];

// gallerytransf :: gallery transformation object
const galleryTransformation = {
	transformation: [
		{
			variables: [
				["$discount", "ctx:!discount!"],
				["$brand", "ctx:!brand!"]]
		},
		{
			width: 1000,
			height: 1000,
			crop: "fill",
			gravity: "auto"
		},
		//...SALE,
		//...BRAND,
	]
};

const galleryVideoTransformation = {
	transformation: [
		{
			width: 1000,
			height: 1000,
			crop: "fill"
		},
	]
};
const ProductGallery = ({ image, mediaAssets }) => {

	useLayoutEffect(() => {

		// gallerywidget :: add gallery widget

		// galleryrender :: render gallery widget

		// gallerydes :: remove gallery widget
	}, []);

	return (
		<div className="image-gallery " aria-live="polite">
			<div className="image-gallery-content">
				{/*static start*/}
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
				{/*static end*/}
			</div>
		</div>
	);
};

export default ProductGallery;
