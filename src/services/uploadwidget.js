import { CREDS } from "../Constants";

let widget;

const init = ({folder, callback, maxFiles}) => {
	// eslint-disable-next-line
	if (self.cloudinary && self.cloudinary.createUploadWidget) {

		if (!widget) {
			// eslint-disable-next-line
			widget = self.cloudinary.createUploadWidget(
				{
					cloudName: CREDS.cloudName,
					uploadPreset: CREDS.unsignedUploadPreset,
					singleUploadAutoClose: true,
					text: {
						en: {
							local: {
								browse: "Select Files"
							},
							menu: {
								files: "Local Files",
								web: "URL",
								camera: "Computer Camera",
								gsearch: "Google",
								instagram: "Instush"
							}
						}
					},
					styles: {
						palette: {
							window: "#ffffff",
							sourceBg: "#E8E8E8",
							windowBorder: "#060C12",
							tabIcon: "#000000",
							inactiveTabIcon: "#555a5f",
							menuIcons: "#191E23",
							link: "#FF0404",
							action: "#9C2F0D",
							inProgress: "#F56767",
							complete: "#205820",
							error: "#cc0000",
							textDark: "#000000",
							textLight: "#fcfffd"
						}
					},
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