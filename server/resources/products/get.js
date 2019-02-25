const cloudinary = require("../../cloudinary");

module.exports = (req, info) => {


	const doSearch = () => {

		cloudinary.search({
			// cursor,
			// tags: [process.env.CLD_TAG],
			max: 100,
		})
			.then((result) => {

				console.log("!!!!!!!!! returned from search - ", {
					...result,
					resources: "",
					items: result.resources.length,
				});


			});

	};


};