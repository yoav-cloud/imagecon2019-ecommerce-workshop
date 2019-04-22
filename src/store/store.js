import {configure} from "mobx";
import * as appData from "./appData";
import * as uiData from "./uiData";

export default () => {
	configure({
		enforceActions: "observed" //"always"
	});

	return {
		appData: {...appData},
		uiData: {...uiData},
	};
};
