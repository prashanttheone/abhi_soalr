import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'dofne9xcb',
    api_key: process.env.CLOUDINARY_API_KEY || '379942665416273',
    api_secret: process.env.CLOUDINARY_API_SECRET || 'tfrNqs_ItNwzhnA_x2MbFW61aoQ'
});

export default cloudinary;
