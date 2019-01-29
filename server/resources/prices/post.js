const getNewPrice = (price) => {

	if (!price ||
		!(Math.ceil(Math.random() * 10) % 3)) {
		price = (Math.ceil(Math.random() * 10) + Math.random()).toFixed(2)
	}

	return price;
};

module.exports = (req, info) => {
	return {
		response: {
			prices: info.requestBody.photos.map((p) => ({
				id: p.id,
				price: getNewPrice(p.price),
			}))
		}
	};
};

