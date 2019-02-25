const cloudinary = require("../../cloudinary"),
	pick = require("lodash/pick");

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

module.exports = (req, info) => {

	const doSearch = () =>
		cloudinary.search({
			with_field: "context",
			publicId: "Products*",
			max: 1000,
		});

	const getProducts = (result) => {
		const products = result.resources
			.reduce((res, item) => {

				const pId = last(item.folder.split("/")),
					product = (res[pId] ? res[pId] : {});

				res[pId] = {
					...item.context,
					items: [...product.items,
						{
							...pick(item, ITEM_PROPS),
						}]
				};

				return res;
			}, {});

		return Object.values(products);
	};

	return doSearch()
		.then(getProducts)
		.catch((error) => {
			console.log("!!!!!!!!!! SEARCH ERROR !!!! ", error);
			return {
				error: true,
			}
		})
		.then((result) => ({
			response: {
				...result,
				success: !result.error,
			}
		}))
};

//
// module.exports = (req, info) => {
//
// 	// const cl = core.Cloudinary.new( { cloud_name: "yoav-cloud"});
// 	// console.log("video tag = ", cl.videoTag("test.mkv").toHtml());
//
// 	const cursor = info.params.cursor;
//
// 	if (cursor) {
// 		console.log("!!!!!!!!!!!! RECEIVED NEXT CURSOR - ", cursor);
// 	}
//
// 	return cloudinary.search({
// 		cursor,
// 		tags: [process.env.CLD_TAG],
// 		max: 100,
// 	})
// 		.then((result) => {
//
// 			console.log("!!!!!!!!! returned from search - ", {
// 				...result,
// 				resources: "",
// 				items: result.resources.length,
// 			});
//
// 			return {
// 				response: {
// 					error: !!result.error,
// 					photos: result.error ? [] : result.resources.map((p) => ({
// 						...p,
// 						price: (Math.ceil(Math.random() * 10) + Math.random()).toFixed(2),
// 					})),
// 					meta: {
// 						next: result.next_cursor,
// 						count: result.total_count,
// 						limit: result.rate_limit_allowed,
// 						limitReset: result.rate_limit_reset_at,
// 						remaining: result.rate_limit_remaining,
// 					},
// 				}
// 			}
// 		});
// };
