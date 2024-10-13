import React, { useState } from "react";

const ImageSettings = ({ onAddImage }) => {
  const [imageSrc, setImageSrc] = useState("");
  const [imageWidth, setImageWidth] = useState("");
  const [imageHeight, setImageHeight] = useState("");
  const [align, setAlign] = useState("left");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageSrc(url);
    }
  };

  const handleAddImage = () => {
    if (imageSrc) {
      onAddImage({
        src: imageSrc,
        width: parseInt(imageWidth) || 100, // Default to 100 if parsing fails
        height: parseInt(imageHeight) || 100, // Default to 100 if parsing fails
        align,
      });
      // Reset the fields after adding
      setImageSrc("");
      setImageWidth("");
      setImageHeight("");
      setAlign("left");
    }
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Add Image</h3>
      <input type="file" onChange={handleImageUpload} />
      {imageSrc && (
        <div
          className={`mb-4 ${
            align === "center"
              ? "flex justify-center"
              : align === "right"
              ? "flex justify-end"
              : ""
          }`}
        >
          <img
            src={imageSrc}
            alt="Uploaded"
            style={{
              width: imageWidth ? `${imageWidth}px` : "100px", // Use input width or default
              height: imageHeight ? `${imageHeight}px` : "100px", // Use input height or default
              objectFit: "contain", // Ensure the image fits within the specified dimensions
            }}
          />
        </div>
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

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mt-5"
        onClick={handleAddImage}
      >
        Add Image
      </button>
    </div>
  );
};

export default ImageSettings;
