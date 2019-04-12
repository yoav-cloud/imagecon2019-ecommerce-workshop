const cloudinary = require("../../cloudinary"),
	pick = require("lodash/pick");

const METADATA_KEYS = [
	"name",
	"brand",
	"price",
	"discount",
];

const getItemContext = (data) => {
	const metadata = pick(data, METADATA_KEYS);

	return Object.entries(metadata)
		.map(([key, val]) =>
			`${key}=${val}`, "")
		.join("|");
};

module.exports = (req, info) => {

	const data = info.requestBody,
		context = getItemContext(info.requestBody);

	console.log("!!!!!!!!! received info = ", data);
	console.log("!!!!!!!!! context = ", context);

	const p = data.items.length ?
		Promise.race(
			data.items.map((item) => {
				return cloudinary.update(
					item.id,
					{
						resource_type: item.type,
						context
					})
			})
		) : Promise.resolve("no files uploaded!");

	return p
		.then((result) => {
			console.log("!!!!!!!!! UPDATE SUCCESS !!!! ", result);

			return {
				success: true,
			};
		})
		.catch((error) => {
			console.log("!!!!!!!!! UPDATE ERROR !!!! ", error);

			return {
				success: false,
			}
		})
		.then((response) => ({ response }));
};