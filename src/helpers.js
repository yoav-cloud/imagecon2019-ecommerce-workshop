const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

const calculateDiscountPrice = ({price, discount}) => {
	discount = parseFloat(discount);
	return discount ? (price - (parseFloat(price) * (discount / 100)))
		.toFixed(1) : price;
};

const getRandomString = (len = 10) =>
	new Array(len)
		.fill(null)
		.map(() => CHARS.charAt(Math.floor(Math.random() * CHARS.length)))
		.join("");

export {
	calculateDiscountPrice,
	getRandomString,
}