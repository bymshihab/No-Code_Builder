import React, { useState } from "react";

const Canvas = () => {
  const [elements, setElements] = useState([]);

  const handleDrop = (e) => {
    const elementType = e.dataTransfer.getData("element");
    setElements([...elements, { type: elementType, id: elements.length }]);
  };

  const allowDrop = (e) => {
    e.preventDefault();
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={allowDrop}
      className="w-full h-screen bg-gray-50 relative p-4 shadow-lg"
    >
      {elements.map((element, index) => (
        <div key={index} className="p-2 bg-white border mb-4">
          {element.type === "Text Element" && <div>Text Element</div>}
          {element.type === "Image Element" && <div>Image Element</div>}
        </div>
      ))}
    </div>
  );
};

export default Canvas;
