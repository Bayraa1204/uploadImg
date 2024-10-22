"use client";

import { useState } from "react";

const Page = () => {
  const [file, setFile] = useState(null);
  const [uploadedImgUrl, setUploadedImgUrl] = useState(null);
  const HandleSelectedFile = (e) => {
    setFile(e.target.files[0]);
  };
  const HandleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "uploads");
    formData.append("cloud_name", "dvthdiyzd");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dvthdiyzd/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await res.json();
    setUploadedImgUrl(data.secure_url);
    console.log(uploadedImgUrl);
  };
  console.log(uploadedImgUrl);
  return (
    <div>
      <input type="file" onChange={(e) => HandleSelectedFile(e)} />
      <button onClick={() => HandleUpload()}>upload</button>
      {uploadedImgUrl && <img src={uploadedImgUrl} />}
    </div>
  );
};
export default Page;
