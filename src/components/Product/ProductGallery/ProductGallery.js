import React, { useEffect } from "react";
import { CREDS } from "../../../Constants";

const ProductGallery = ({ productInfo, mediaAssets }) => {
  useEffect(() => {
    const myWidget = window.cloudinary.galleryWidget({
      container: "#product-gallery",
      cloudName: CREDS.cloudName,
      mediaAssets: mediaAssets.map(asset => ({
        ...asset,
        transformation: {
          transformation: [
            { variables: [["$discount", "ctx:!discount!"], ["$brand", "ctx:!brand!"]] },
            { width: 1000, height: 1000, crop: "fill", gravity: "auto" },
            { if: "$discount_ne_!0!" },
            { overlay: "badge", width: 300, flags: "relative", effect: "colorize", color: "rgb:CC0000" },
            { overlay: "text:arial_80_bold:$(discount)%2525", color: "white" },
            { gravity: "center", x: -50, flags: "layer_apply" },
            { gravity: "north_east", x: 30, y: 30, angle: -20, flags: "layer_apply" },
            { if: "end" },
            { overlay: "$brand", width: 500 },
            { gravity: "south_west", x: 30, y: -30, flags: "layer_apply" }
          ]
        }
      })),
      carouselLocation: "bottom",
      carouselOffset: 10,
      navigation: "always",
      aspectRatio: "square",
      thumbnailProps: {
        spacing: 18,
        width: 83,
        height: 80,
        selectedBorderColor: "#D10024",
        selectedBorderPosition: "top-bottom"
      },
      zoom: true,
      zoomProps: {
        trigger: "hover",
        level: 2
      },
      placeholderImage: false
    });
    myWidget.render();
  }, [mediaAssets]); // Only re-run the effect if count changes

  return <div id="product-gallery" style={{ width: "400px" }} />;
};

export default ProductGallery;
