import React from "react";

export const BRANDS = ["Speeder", "Sports", "Footware"];

const BrandsSelect = ({value, onChange}) =>
	<select name="brand" value={value} onChange={onChange}>
		<option value=""/>
		{BRANDS.map(brand => (
			<option value={brand} key={brand}>
				{brand}
			</option>
		))}
	</select>;

export default BrandsSelect;