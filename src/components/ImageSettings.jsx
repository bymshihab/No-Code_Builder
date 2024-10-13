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
  // class="file-input file-input-bordered w-full max-w-xs"
  return (
    <div className="p-6 bg-white rounded-lg shadow-md  w-full">
      <h3 className="text-xl font-semibold mb-4">Add Image</h3>
      <input
        type="file"
        onChange={handleImageUpload}
        className="mb-4 border rounded-lg p-2 w-full bg-gray-100 cursor-pointer file-input file-input-bordered "
      />
      {imageSrc && (
        <div
          className={`mb-4 ${
            align === "center"
              ? "flex justify-center"
              : align === "right"
              ? "flex justify-end"
              : "flex justify-start"
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
            className="rounded-lg shadow-sm"
          />
        </div>
      )}
      <div className="flex space-x-2 mb-4  ">
        <input
          type="text"
          placeholder="Width (px)"
          value={imageWidth}
          onChange={(e) => setImageWidth(e.target.value)}
          className="p-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-1/2"
        />
        <input
          type="text"
          placeholder="Height (px)"
          value={imageHeight}
          onChange={(e) => setImageHeight(e.target.value)}
          className="p-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <select
          value={align}
          onChange={(e) => setAlign(e.target.value)}
          className="p-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        >
          <option value="left">Align Left</option>
          <option value="center">Align Center</option>
          <option value="right">Align Right</option>
        </select>
      </div>
      <div className="flex justify-end">
        <button
          className="bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition duration-200"
          onClick={handleAddImage}
        >
          Add Image
        </button>
      </div>
    </div>
  );
};

export default ImageSettings;
