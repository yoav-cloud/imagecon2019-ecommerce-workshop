import React from "react";

const ProductGallery = ({ image }) => {
	return (
		<div className="image-gallery " aria-live="polite">
			<div className="image-gallery-content">
				<div className="image-gallery-slide-wrapper left">
					<div className="image-gallery-slides">
						<div className="image-gallery-slide center"
						     role="button"
						     style={{ transform: "translate3d(0%, 0px, 0px)" }}>
							<div className="image-gallery-image"><img
								src={image} alt=""/></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};


// import { CREDS } from "../../../consts";
//
// const ProductGallery = ({ mediaAssets }) => {
//   useLayoutEffect(() => {
//     const myWidget = window.cloudinary.galleryWidget({
//       container: "#product-gallery",
//       cloudName: CREDS.cloudName,
//       mediaAssets: mediaAssets.map(ma => ({
//         ...ma
//       })),
//       transformation: { transformation: [{}] },
//       bgColor: "transparent",
//       carouselLocation: "bottom",
//       carouselOffset: 10,
//       navigation: "always",
//       aspectRatio: "square",
//       navigationButtonProps: {
//         shape: "rectangle",
//         color: "#000",
//         iconColor: "#fff",
//         buttonSize: 42
//       },
//       thumbnailProps: {
//         spacing: 18,
//         width: 83,
//         height: 80,
//         navigationFloat: true,
//         mediaSymbolBgShape: "square",
//         navigationShape: "none",
//         selectedStyle: "all",
//         selectedGradientEnd: "#ffffff",
//         selectedBorderColor: "#D10024",
//         selectedGradientDirection: "vertical",
//         selectedBorderPosition: "top-bottom"
//       },
//       viewportBreakpoints: [
//         {
//           breakpoint: 1024,
//           carouselLocation: "bottom"
//         },
//         {
//           breakpoint: 480,
//           carouselStyle: "indicators",
//           carouselLocation: "bottom",
//           thumbnailProps: {
//             color: "#000000"
//           }
//         }
//       ],
//       zoom: true,
//       zoomProps: {
//         trigger: "click",
//         level: 2
//       },
//       placeholderImage: false
//     });
//     myWidget.render();
//   }, [mediaAssets]); // Only re-run the effect if count changes
//
//   return <div id="product-gallery" style={{ width: "400px" }} />;
// };

export default ProductGallery;
