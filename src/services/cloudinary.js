import { Cloudinary } from "cloudinary-core";
import { generateImageResponsiveAttributes } from "cloudinary/lib/utils/srcsetUtils";
import { CLOUD } from "../consts";
import "cloudinary-video-player";

const BREAK_POINTS = 4;

const cldInstance = Cloudinary.new({ cloud_name: CLOUD });

export const getResponsiveAttributes = (id, min, max, transformation) => {

	const sizes = new Array(BREAK_POINTS)
		.fill(null)
		.map((n, i) => `(max-width: ${min * (i + 1)}px) ${(min * (i + 1)) / 2}px`);

	const srcset = generateImageResponsiveAttributes(id, {}, {
		// sizes: true,
		min_width: min,
		max_width: max,
		max_images: BREAK_POINTS,
		transformation: { transformation },
	}, {
		cloud_name: CLOUD,
	});

	return {
		...srcset,
		sizes,
	};
};

export const videoPlayer = cldInstance.videoPlayer.bind(cldInstance);

export default cldInstance;
