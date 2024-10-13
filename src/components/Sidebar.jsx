import React, { useState } from "react";
import TextSettings from "./TextSettings";
import ImageSettings from "./ImageSettings";

const Sidebar = ({ onAddText, onAddImage }) => {
  // Set "Text" as the default selected element
  const [selectedElement, setSelectedElement] = useState("Text");

  return (
    <div className="flex">
      <div className="w-1/4 p-4 bg-gray-100 border-r">
        <h2 className="text-xl font-semibold mb-4">Elements</h2>
        <div className="flex flex-col space-y-4">
          <div
            onClick={() => setSelectedElement("Text")}
            className={`p-4 rounded shadow cursor-pointer transition duration-200 ${
              selectedElement === "Text" ? "bg-blue-200" : "bg-white"
            }`}
          >
            Text
          </div>
          <div
            onClick={() => setSelectedElement("Image")}
            className={`p-4 rounded shadow cursor-pointer transition duration-200 ${
              selectedElement === "Image" ? "bg-blue-200" : "bg-white"
            }`}
          >
            Image
          </div>
        </div>
      </div>

      <div className="p-4 w-[29rerm]">
        {selectedElement === "Text" && <TextSettings onAddText={onAddText} />}
        {selectedElement === "Image" && (
          <ImageSettings onAddImage={onAddImage} />
        )}
      </div>
    </div>
  );
};

export default Sidebar;
