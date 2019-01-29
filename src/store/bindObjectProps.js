import camelCase from "lodash/camelCase";
import {action} from "mobx";

export default (obj) => {
	const actions = Object.keys(obj).reduce((res, k) => {
		if (typeof obj[k] !== "function") {
			const actName = camelCase(`set_${k}`);

			if (!obj[actName]) { //add the action method itself if doesnt exist already
				obj[actName] = function (val) {
					this[k] = val;
				};
			}

			res[actName] = action; //register the action name to be bound by observable
		}

		return res;
	}, {});

	return [obj, actions];
};