import { Cloudinary } from "cloudinary-core";
import { CREDS } from "../consts";

var cloudinaryInstance = Cloudinary.new({ cloud_name: CREDS.cloudName });

export default cloudinaryInstance;
