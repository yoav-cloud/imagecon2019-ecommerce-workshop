import { execute } from "./api";
import { CREDS } from "../Constants";

const init = async (options, callback: Function) => {
  // eslint-disable-next-line
  var myWidget = self.cloudinary.createUploadWidget(
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
  return myWidget;
};

export { init };
