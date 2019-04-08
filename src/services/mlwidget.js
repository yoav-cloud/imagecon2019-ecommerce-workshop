import request from "./api";

const mloptions = {};

const init = async (button: string) => {
	let ml;

	// eslint-disable-next-line
	if (self.cloudinary && self.cloudinary.createMediaLibrary) {
		const serverParams = await request("/signature");
		// eslint-disable-next-line
		ml = self.cloudinary.createMediaLibrary({ ...serverParams, ...mloptions }, {
			insertHandler: () => {
			}
		}, button);
	}

	return ml;
};

export { init };
