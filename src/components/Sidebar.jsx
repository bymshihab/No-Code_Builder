import React, { useState } from "react";
import TextSettings from "./TextSettings";
import ImageSettings from "./ImageSettings";

const Sidebar = () => {
  const [selectedElement, setSelectedElement] = useState(null);
  const [text, setText] = useState("");
  const [imageSrc, setImageSrc] = useState("");

  const handleTextChange = (newText) => {
    setText(newText);
  };

  const handleImageChange = (url) => {
    setImageSrc(url);
  };

  return (
    <div className="flex">
      <div className="w-1/4 p-4 bg-gray-100 border-r">
        <h2 className="text-xl font-semibold mb-4">Elements</h2>
        <div className="flex flex-col space-y-4">
          <div
            onClick={() => setSelectedElement("Text")}
            className="p-4 bg-white rounded shadow cursor-pointer"
          >
            Text Element
          </div>
          <div
            onClick={() => setSelectedElement("Image")}
            className="p-4 bg-white rounded shadow cursor-pointer"
          >
            Image Element
          </div>
        </div>
      </div>

      <div className="w-3/4 p-4">
        {selectedElement === "Text" && (
          <TextSettings onTextChange={handleTextChange} />
        )}
        {selectedElement === "Image" && (
          <ImageSettings onImageChange={handleImageChange} />
        )}
      </div>
    </div>
  );
};

export default Sidebar;
