const calculateDiscountPrice = ({price, discount}) =>
	(price - (parseFloat(price) * (parseFloat(discount) / 100)))
		.toFixed(1);


export {
	calculateDiscountPrice,
}