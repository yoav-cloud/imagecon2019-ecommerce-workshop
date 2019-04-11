import React from "react";
import { BRANDS } from "./consts";

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