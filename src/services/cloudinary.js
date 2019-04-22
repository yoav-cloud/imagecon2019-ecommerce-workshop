import { Cloudinary } from "cloudinary-core";
import { generateImageResponsiveAttributes } from "cloudinary/lib/utils/srcsetUtils";

import { CLOUD } from "../consts";

const cldInstance = Cloudinary.new({ cloud_name: CLOUD });

export const getResponsiveAttributes = (id, min, max, transformation) =>
	generateImageResponsiveAttributes(id, {}, {
		sizes: true,
		min_width: min,
		max_width: max,
		max_images: 4,
		transformation: {transformation},
	}, {
		cloud_name: CLOUD,
	});

export default cldInstance;
