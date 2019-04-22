export const CLOUD = "ecomm40";
export const PRESET =  "ecomm40upload";

export const MAX_UPLOADS = 5;

export const PRODUCT_ATTRIBUTES = ["name", "price", "brand", "discount"];

export const PRODUCT_IMAGE_PREVIEW_TRANSFORMATION = {
	width: 100,
	height: 100,
	crop: "limit",
	fetch_format: "auto",
	quality: "auto"
};

export const STATUS_MESSAGES = {
	success: "Product has been saved!",
	error: "Product failed to update..."
};

export const TYPES = {
	SET_DETAILS: "SET_DETAILS",
	SET_STATUS: "SET_STATUS",
	// name: "name",
	// price: "price",
	// brand: "brand",
	// discount: "discount",
	// items: "items",
	// status: "status",
};

export const SALE = [
	{ if: "$discount_ne_!0!" },
	{
		overlay: "badge",
		width: 300,
		flags: "relative",
		effect: "colorize",
		color: "rgb:CC0000"
	},
	{ overlay: "text:arial_80_bold:$(discount)%2525", color: "white" },
	{ gravity: "center", x: -50, flags: "layer_apply" },
	{ gravity: "north_east", x: 30, y: 30, angle: -20, flags: "layer_apply" },
	{ if: "end" },
];

export const BRAND = [
	{ overlay: "$brand", width: 500 },
	{ gravity: "south_west", x: 30, y: -30, flags: "layer_apply" }
];