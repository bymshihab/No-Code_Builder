import React, { useState } from "react";

const Canvas = ({ onElementSelect, elements, setElements }) => {
  const [selectedElementId, setSelectedElementId] = useState(null);

  const handleDrop = (e) => {
    const elementType = e.dataTransfer.getData("element");
    setElements([
      ...elements,
      { type: elementType, id: elements.length, content: "" },
    ]);
  };

  const allowDrop = (e) => {
    e.preventDefault();
  };

  const handleElementClick = (id) => {
    setSelectedElementId(id);
    onElementSelect(id); // Notify parent of the selected element
  };

  const handleTextChange = (e, id) => {
    const updatedElements = elements.map((el) =>
      el.id === id ? { ...el, content: e.target.innerText } : el
    );
    setElements(updatedElements);
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={allowDrop}
      className="w-3/4 h-screen bg-gray-50 relative p-4 shadow-lg"
    >
      {elements.map((element) => (
        <div
          key={element.id}
          className={`p-2 bg-white border mb-4 ${
            element.id === selectedElementId ? "border-blue-500" : ""
          }`}
          contentEditable={element.type === "Text Element"} // Allow only text elements to be editable
          onClick={() => handleElementClick(element.id)} // Call on click to select
          onInput={(e) => handleTextChange(e, element.id)} // Capture live changes while typing
          style={{
            textAlign: element.align,
            fontWeight: element.bold ? "bold" : "normal",
            fontStyle: element.italic ? "italic" : "normal",
            textDecoration: element.underline ? "underline" : "none",
          }}
        >
          {element.content ||
            (element.type === "Text Element" && "Click to edit text")}
        </div>
      ))}
    </div>
  );
};

export default Canvas;
