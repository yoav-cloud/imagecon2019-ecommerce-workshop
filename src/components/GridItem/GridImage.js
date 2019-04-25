import React from "react";
import cloudinary, { getResponsiveAttributes } from "../../services/cloudinary";

const GridImage = ({ item }) => {

	const transformation = [
		{
			quality: "auto",
			fetchFormat: "auto",
			dpr: 2,
		},
		{
			variables: [["$discount", "ctx:!discount!"]],
		},
		{ if: "$discount_ne_!0!" },
		{
			overlay: "badge_sale",
			width: 0.4,
			flags: "relative",
			gravity: "north_west",
		},
		{ if: "end" }
	];

	const respAttrs = getResponsiveAttributes(
		item.publicId,
		400,
		1000,
		transformation);

	const url = cloudinary.url(item.publicId, { transformation });

	return (
		<img src={url}
		     alt={item.publicId}
		     srcSet={respAttrs.srcset}
		     sizes={respAttrs.sizes}/>
	);
};

export default GridImage;