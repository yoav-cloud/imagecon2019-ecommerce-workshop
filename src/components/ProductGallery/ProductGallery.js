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

const galleryVideoTransformation = {
	transformation: [
		{
			width: 1000,
			height: 1000,
			crop: "fill"
		},
	]
};

const galleryTransformation = {
	transformation: [
		{
			width: 1000,
			height: 1000,
			crop: "fill",
			gravity: "auto"
		},
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
			<div className="image-gallery-content" />
		</div>
	);
};

export default ProductGallery;
