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