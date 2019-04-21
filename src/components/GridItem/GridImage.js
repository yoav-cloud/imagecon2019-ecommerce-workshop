import React from "react";
import cloudinary from "../../services/cloudinary";

const GridImage = ({ item }) => {
	const url = cloudinary.url(item.public_id, {
		crop: "fit",
		width: 260,
		quality: "auto",
		fetchFormat: "auto",
		dpr: 2,
	});

	return (
		<img src={url} />
	);
};

export default GridImage;