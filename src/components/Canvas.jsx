import React, { useState } from "react";

const Canvas = ({ elements }) => {
  const [positions, setPositions] = useState(
    elements.reduce((acc, element) => {
      acc[element.id] = { x: 0, y: 0 };
      return acc;
    }, {})
  );

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("text/plain", id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    const id = e.dataTransfer.getData("text");
    const x = e.clientX;
    const y = e.clientY;

    setPositions((prevPositions) => ({
      ...prevPositions,
      [id]: { x: x - 50, y: y - 10 }, // Adjust to position near cursor
    }));
  };

  return (
    <div
      className="flex-1 p-4 bg-red-200 min-h-screen"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {elements.map((element) => (
        <div
          key={element.id}
          draggable
          onDragStart={(e) => handleDragStart(e, element.id)}
          style={{
            fontWeight: element.style?.fontWeight || "normal",
            fontStyle: element.style?.fontStyle || "normal",
            textDecoration: element.style?.textDecoration || "none",
            textAlign: element.style?.textAlign || "left",
            position: "absolute",
            cursor: "pointer",
            left: positions[element.id]?.x || 0,
            top: positions[element.id]?.y || 0,
          }}
          className="draggable"
        >
          {element.text}
        </div>
      ))}
    </div>
  );
};

export default Canvas;
