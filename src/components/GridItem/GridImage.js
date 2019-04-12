import React from "react";
//import cloudinary from "../../services/cloudinary";

const GridImage = ({ image }) => {

	return (
		<img src={image}/>
	);
};

export default GridImage;

// const renderProductImage = ({ name, items }) => {
//   const image = items.find(i => i.resource_type === "image");
//
//   const url = image
//     ? cloudinary.url(image.public_id, {
//         crop: "fit",
//         width: 260,
//         dpr: 2
//       })
//     : null;
//
//   return url && <img src={url} alt={name} />;
// };
