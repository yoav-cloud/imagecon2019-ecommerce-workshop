const path = require("path"),
	uploader = require("../../cloudinary").uploader;

module.exports = () => {

	console.log("about to upload banner video with adaptive streaming");

	return new Promise((resolve) => {
		uploader.upload(path.resolve("./banner-video.mp4"), {
			public_id: "banner-video-hls",
			overwrite: true,
			resource_type: "video",
			eager: [
				{ streaming_profile: "full_hd", format: "m3u8" }],
		}, (result) => {
			console.log("video upload result = ", result);
			resolve({
				response: {
					...result,
				}
			})
		});
	});

};