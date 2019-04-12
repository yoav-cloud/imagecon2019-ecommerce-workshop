import React from "react";

const GridImage = ({ item }) => {
	const url = item.secure_url;

	return (
		<img src={url}/>
	);
};

export default GridImage;