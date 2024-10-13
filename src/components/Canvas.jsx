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
      className="flex-1 p-4 bg-gray-50 min-h-screen relative"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {elements.map((element) => {
        if (element.type === "text") {
          return (
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
          );
        } else if (element.type === "image") {
          return (
            <img
              key={element.id}
              src={element.src}
              alt="Canvas Element"
              draggable
              onDragStart={(e) => handleDragStart(e, element.id)}
              style={{
                width: element.width,
                height: element.height,
                position: "absolute",
                cursor: "pointer",
                left:
                  element.align === "right"
                    ? 0
                    : element.align === "center"
                    ? "50%"
                    : "auto",
                transform:
                  element.align === "center" ? "translateX(-50%)" : "none",
                right: element.align === "right" ? 0 : "auto",
                top: positions[element.id]?.y || 0,
                display: element.align === "center" ? "block" : "inline-block",
                float: element.align,
                margin: element.align === "center" ? "0 auto" : "0",
              }}
              className="draggable"
            />
          );
        }
        return null;
      })}
    </div>
  );
};

export default Canvas;
