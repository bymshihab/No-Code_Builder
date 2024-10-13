import React, { useState, useEffect } from "react";

const Canvas = ({ elements }) => {
  const [positions, setPositions] = useState(
    elements.reduce((acc, element) => {
      acc[element.id] = { x: 0, y: 0 };
      return acc;
    }, {})
  );

  const [isDragging, setIsDragging] = useState(false);
  const [draggingId, setDraggingId] = useState(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e, id) => {
    setIsDragging(true);
    setDraggingId(id);
    const rect = e.target.getBoundingClientRect();
    setOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging || draggingId === null) return;

    // Calculate new position based on mouse movement
    const newX = e.clientX - offset.x;
    const newY = e.clientY - offset.y;

    setPositions((prevPositions) => ({
      ...prevPositions,
      [draggingId]: { x: newX, y: newY },
    }));
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setDraggingId(null);
  };

  // Attach mousemove and mouseup events to the document
  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="flex-1 p-4 bg-gray-50 min-h-screen relative">
      {elements.map((element) => {
        if (element.type === "text") {
          return (
            <div
              key={element.id}
              onMouseDown={(e) => handleMouseDown(e, element.id)}
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
              onMouseDown={(e) => handleMouseDown(e, element.id)}
              style={{
                width: element.width,
                height: element.height,
                position: "absolute",
                cursor: "pointer",
                left: positions[element.id]?.x || 0,
                top: positions[element.id]?.y || 0,
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
