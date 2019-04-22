import React from "react";
import cloudinary, { getResponsiveAttributes } from "../../services/cloudinary";

const GridImage = ({ item }) => {

	const transformation = [
		{
			crop: "fit",
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
			width: 800,
			gravity: "north_west",
		},
		{ if: "end" }
	];

	const respAttrs = getResponsiveAttributes(
		item.publicId,
		600,
		1400,
		transformation);

	const url = cloudinary.url(item.publicId, { transformation });

	return (
		<img src={url} alt={item.publicId} {...respAttrs} />
	);
};

export default GridImage;