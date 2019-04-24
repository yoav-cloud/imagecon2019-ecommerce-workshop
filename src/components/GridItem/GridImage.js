import React from "react";
// impcldres :: import cloudinary & responsive helper

const GridImage = ({ item }) => {

	// gridtrans :: transformation for grid image

	// respattrs :: create responsive attributes

	// cldurl :: generate url
	const url = item.secureUrl;

	return (
		<img src={url}
		     alt={item.publicId}
			/*{...respAttrs}*/ />
	);
};

export default GridImage;