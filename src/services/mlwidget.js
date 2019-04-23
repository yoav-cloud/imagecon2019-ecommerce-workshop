/* eslint-disable */
import request from "./api";

const mloptions = {};

const init = async (button: string) => {
	let ml;

	if (self.cloudinary && self.cloudinary.createMediaLibrary) {
		const serverParams = await request("/signature");
		ml = self.cloudinary.createMediaLibrary({ ...serverParams, ...mloptions }, {
			insertHandler: () => {
			}
		}, button);
	}

	return ml;
};

export { init };
