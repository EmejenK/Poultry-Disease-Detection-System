const upload_preset = import.meta.env.VITE_UPLOAD_PRESET;
const cloud_name = import.meta.env.VITE_CLOUD_NAME;

//upload image to cloudinary and return the image url and public id 
const uploadImageToCloudinary = async file => {
    //create a new form data 
    const uploadData = new FormData();

    uploadData.append("file", file);
    uploadData.append("upload_preset", upload_preset);
    uploadData.append("cloud_name", cloud_name);

    //send the image to cloudinary 
    const res = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, {
        method: "post",
        body: uploadData,
    });

    //get the data 
    const data = await res.json();
    return data;
};

export default uploadImageToCloudinary;
