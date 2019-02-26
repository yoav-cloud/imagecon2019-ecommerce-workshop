export const calculateDiscountPrice = ({ price, discount }) => (parseFloat(price) * (parseFloat(discount) / 100)).toFixed(1);
