import React, { useEffect } from "react";
import { CREDS } from "../../../Constants";

const ProductGallery = ({ mediaAssets }) => {
  useEffect(() => {
    const myWidget = window.cloudinary.galleryWidget({
      container: "#product-gallery",
      cloudName: CREDS.cloudName,
      mediaAssets: mediaAssets.map(ma => ({
        ...ma
      })),
      transformation: { transformation: [{}] },
      bgColor: "transparent",
      carouselLocation: "bottom",
      carouselOffset: 10,
      navigation: "always",
      aspectRatio: "square",
      navigationButtonProps: {
        shape: "rectangle",
        color: "#000",
        iconColor: "#fff",
        buttonSize: 42
      },
      thumbnailProps: {
        spacing: 18,
        width: 83,
        height: 80,
        navigationFloat: true,
        mediaSymbolBgShape: "square",
        navigationShape: "none",
        selectedStyle: "all",
        selectedGradientEnd: "#ffffff",
        selectedBorderColor: "#D10024",
        selectedGradientDirection: "vertical",
        selectedBorderPosition: "top-bottom"
      },
      viewportBreakpoints: [
        {
          breakpoint: 1024,
          carouselLocation: "bottom"
        },
        {
          breakpoint: 480,
          carouselStyle: "indicators",
          carouselLocation: "bottom",
          thumbnailProps: {
            color: "#000000"
          }
        }
      ],
      zoom: true,
      zoomProps: {
        trigger: "click",
        level: 2
      },
      placeholderImage: false
    });
    myWidget.render();
  }, [mediaAssets]); // Only re-run the effect if count changes

  return <div id="product-gallery" style={{ width: "400px" }} />;
};

export default ProductGallery;
