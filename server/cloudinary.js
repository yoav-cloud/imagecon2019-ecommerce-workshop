const cloudinary = require("cloudinary"),
	colors = require("colors/safe");

cloudinary.config({
	cloud_name: process.env.CLD_CLOUD,
	api_key: process.env.CLD_KEY,
	api_secret: process.env.CLD_SECRET,
});

const search = (options) => {

	const q = {
		// type: "image",
		tags: [],
		text: "",
		max: 50,
		...options,
	};

	const publicId = q.publicId ? ` public_id:${q.publicId} ` : "";
	const rType = q.type ? ` resource_type:${q.type} ` : "";
	const folder = q.folder ? ` folder:${q.folder} ` : "";
	const tags = q.tags && q.tags.length ?
		`AND ` + q.tags.map((t) => `tags=${t}`).join(" AND ") : "";

	const exp = `${publicId}${rType}${tags}${folder}${q.text ? ` AND ${q.text} ` : ""}`;

	console.info(colors.yellow(`issuing search query: ${exp}`));

	return cloudinary.v2.search
		.expression(exp)
		.with_field(q.with_field)
		.next_cursor(q.cursor)
		.sort_by("uploaded_at")
		.max_results(options.max)
		.execute()
		.catch((error) => {
			console.error("FAILED TO SEARCH !!!! ", error);
			return {error: true};
		})
};

const update = (id, options) => {

	return cloudinary.v2.api.update(id,
		{
			...options
		})
		.catch((error) => {
			console.error("FAILED TO UPDATE !!!!!!!!!!", error);
			return {error: true};
		});
};

module.exports = {
	search,
	update,
};