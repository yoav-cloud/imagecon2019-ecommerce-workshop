import { execute } from "./api";
import { CREDS } from "../Constants";

const init = async (options, callback: Function) => {
	let widget;

	// eslint-disable-next-line
	if (self.cloudinary && self.cloudinary.createUploadWidget) {
		// eslint-disable-next-line
		widget = self.cloudinary.createUploadWidget(
			{
				cloudName: CREDS.cloudName,
				uploadPreset: CREDS.unsignedUploadPreset,
				singleUploadAutoClose: true,
				...options
			},
			(error, result) => {
				console.log(error, result);
				callback && callback(error, result);
			}
		);
	}

	return widget;
};

export { init };
