import { Cloudinary } from "cloudinary-core";
import { CREDS } from "../Constants";

var cloudinaryInstance = Cloudinary.new({ cloud_name: CREDS.cloudName });

export default cloudinaryInstance;
