import { Cloudinary } from "cloudinary-core";
import { generateImageResponsiveAttributes } from "cloudinary/lib/utils/srcsetUtils";
import { CLOUD } from "../consts";

const cldInstance = Cloudinary.new({ cloud_name: CLOUD });

//so React doesnt complain
const replaceSrcsetProp = (obj) => {
	obj.srcSet = obj.srcset;
	delete obj.srcset;
	return obj;
};

export const getResponsiveAttributes = (id, min, max, transformation) =>
	replaceSrcsetProp(generateImageResponsiveAttributes(id, {}, {
		sizes: true,
		min_width: min,
		max_width: max,
		max_images: 4,
		transformation: { transformation },
	}, {
		cloud_name: CLOUD,
	}));

export default cldInstance;
