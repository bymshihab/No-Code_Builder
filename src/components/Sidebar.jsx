import React, { useState } from "react";
import TextSettings from "./TextSettings";
import ImageSettings from "./ImageSettings";

const Sidebar = ({ onAddText, onAddImage }) => {
  const [selectedElement, setSelectedElement] = useState(null);

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
        {selectedElement === "Text" && <TextSettings onAddText={onAddText} />}
        {selectedElement === "Image" && (
          <ImageSettings onAddImage={onAddImage} />
        )}
      </div>
    </div>
  );
};

export default Sidebar;
