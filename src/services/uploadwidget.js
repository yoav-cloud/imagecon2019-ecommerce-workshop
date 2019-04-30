/* eslint-disable */
import { CLOUD, PRESET } from "../consts";

let widget;

const init = ({folder, maxFiles, callback}) => {

	if (self.cloudinary && self.cloudinary.createUploadWidget) {
		if (!widget) {

			widget = self.cloudinary.createUploadWidget(
				{
					cloudName: CLOUD,
					uploadPreset: PRESET,
					singleUploadAutoClose: true,
					maxFiles,
					folder,
				},
				(error, result) => {
					console.log(error, result);
					callback && callback(error, result);
				}
			);
		} else {
			widget.update({
				folder,
				maxFiles,
			});
		}
	}

	return widget;
};

export { init };