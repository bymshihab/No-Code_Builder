import React, { useState } from "react";

const ImageSettings = ({ onImageChange }) => {
  const [imageSrc, setImageSrc] = useState("");
  const [imageWidth, setImageWidth] = useState("");
  const [imageHeight, setImageHeight] = useState("");
  const [align, setAlign] = useState("left");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageSrc(url);
      onImageChange(url);
    }
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <h3 className="text-lg font-semibold mb-2">Image Settings</h3>
      <input type="file" onChange={handleImageUpload} className="mb-4" />
      {imageSrc && (
        <img
          src={imageSrc}
          alt="Uploaded"
          className={`mb-4 w-${imageWidth} h-${imageHeight} ${
            align === "center"
              ? "mx-auto"
              : align === "right"
              ? "float-right"
              : ""
          }`}
        />
      )}
      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          placeholder="Width"
          value={imageWidth}
          onChange={(e) => setImageWidth(e.target.value)}
          className="p-2 border"
        />
        <input
          type="text"
          placeholder="Height"
          value={imageHeight}
          onChange={(e) => setImageHeight(e.target.value)}
          className="p-2 border"
        />
      </div>
      <div className="mb-4">
        <select
          value={align}
          onChange={(e) => setAlign(e.target.value)}
          className="p-2 border"
        >
          <option value="left">Align Left</option>
          <option value="center">Align Center</option>
          <option value="right">Align Right</option>
        </select>
      </div>

      <button className="bg-blue-500 text-white px-4 py-2 rounded mt-5">
        Add Img
      </button>
    </div>
  );
};

export default ImageSettings;
