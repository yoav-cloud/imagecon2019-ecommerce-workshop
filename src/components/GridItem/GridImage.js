import React from "react";

const GridImage = ({ item }) => {
	const url = item.secureUrl;

	return (
		<img src={url} alt={item.publicId}/>
	);
};

export default GridImage;