const cloudinary = require("../../cloudinary"),
	pick = require("lodash/pick"),
	LRU = require("lru-cache");

const productsCache = new LRU({
	maxAge: 1000 * 5, //5 seconds cache
});

const ITEM_PROPS = [
	"public_id",
	"secure_url",
	"type",
	"format",
	"resource_type",
	"width",
	"height",
	"aspect_ratio",
];

const last = (arr) => arr[arr.length - 1];

const productsFolder = "Products";

const getResponse = (result) => ({
	response: {
		...result,
		success: !result.error,
	}
});

const cacheProducts = (products) => {
	productsCache.set("products", products);
	return products;
};

const getCachedProducts = () => {
	const products = productsCache.get("products");

	if (products) {
		console.log("-------- found products in cache -----");
	}

	return products
};

module.exports = (req, info) => {

	const doSearch = () =>
		cloudinary.search({
			with_field: "context",
			publicId: `${productsFolder}*`,
			max: 1000,
		});

	const getProducts = (result) => {
		const products = result.resources
			.reduce((res, item) => {

				const pId = last(item.folder.split("/")),
					product = (res[pId] ? res[pId] : {items: []});

				//only include items in a sub-folder
				if (pId !== productsFolder.toLowerCase()) {
					res[pId] = {
						id: pId,
						...res[pId],
						...item.context,
						items: [
							...product.items,
							{
								...pick(item, ITEM_PROPS),
							}]
					};
				}

				return res;
			}, {});

		return {
			products: Object.values(products),
			itemCount: result.resources.length,
			rateRest: result.rate_limit_reset_at,
			rateRemaining: result.rate_limit_remaining,
		};
	};

	const products = getCachedProducts();

	return products ? getResponse(products) : doSearch()
		.then(getProducts)
		.then(cacheProducts)
		.catch((error) => {
			console.log("!!!!!!!!!! SEARCH ERROR !!!! ", error);
			return {
				error: true,
			}
		})
		.then(getResponse);
};