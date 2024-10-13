import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Canvas from "./Canvas";

const Builder = () => {
  const [elements, setElements] = useState([]);

  const handleAddText = (text, style) => {
    setElements((prevElements) => [
      ...prevElements,
      { type: "text", text, style, id: prevElements.length }, // Existing text handling
    ]);
  };

  const handleAddImage = (imageSettings) => {
    // Create a unique ID for the new image element
    const newElement = {
      id: Date.now(), // Unique ID based on timestamp
      type: "image",
      src: imageSettings.src,
      width: imageSettings.width,
      height: imageSettings.height,
      align: imageSettings.align,
    };

    setElements((prevElements) => [...prevElements, newElement]);
  };

  return (
    <div className="flex">
      <Sidebar onAddText={handleAddText} onAddImage={handleAddImage} />
      <Canvas elements={elements} />
    </div>
  );
};

export default Builder;
