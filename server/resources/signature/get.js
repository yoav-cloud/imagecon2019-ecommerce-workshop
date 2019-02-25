const crypto = require("crypto");

module.exports = () => {

	const params = {
		cloud_name: process.env.CLD_CLOUD,
		username: "yoav+imagecon2019@cloudinary.com",
		timestamp: Math.floor(Date.now() / 1000), // in case of signature login
	};

	const str = Object.keys(params)
		.sort()
		.map((k) => `${k}=${params[k]}`)
		.join("&");

	const hash = crypto.createHash("sha256");
	hash.update(str + process.env.CLD_SECRET);

	const signature = hash.digest("hex");

	return {
		response: {
			...params,
			signature,
			api_key: process.env.CLD_KEY,
		}
	};
};
