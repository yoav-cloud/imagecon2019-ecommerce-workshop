import {configure} from "mobx";
import * as appData from "./appData";
import * as uiData from "./uiData";

// const getAppData = () => ({
// 	...appData,
// });
//
// const getUiData = () => ({
// 	...uiData,
// });
//
// export {
// 	getAppData,
// 	getUiData,
// };


export default () => {
	configure({
		enforceActions: "observed" //"always"
	});

	return {
		appData: {...appData},
		uiData: {...uiData},
	};
};

// export default store;
