import React from "react";

const TextSettings = ({ selectedElement, updateElementStyles }) => {
  if (!selectedElement || selectedElement.type !== "Text Element") return null; // Only render if a text element is selected

  const handleStyleChange = (style) => {
    updateElementStyles(style);
  };

  return (
    <div className="p-4 bg-gray-100 border-b">
      <button
        onClick={() => handleStyleChange({ bold: !selectedElement.bold })}
        className={`px-2 py-1 mr-2 ${selectedElement.bold ? "font-bold" : ""}`}
      >
        B
      </button>
      <button
        onClick={() => handleStyleChange({ italic: !selectedElement.italic })}
        className={`px-2 py-1 mr-2 ${selectedElement.italic ? "italic" : ""}`}
      >
        I
      </button>
      <button
        onClick={() =>
          handleStyleChange({ underline: !selectedElement.underline })
        }
        className={`px-2 py-1 mr-2 ${
          selectedElement.underline ? "underline" : ""
        }`}
      >
        U
      </button>
      <button
        onClick={() => handleStyleChange({ align: "left" })}
        className="px-2 py-1 mr-2"
      >
        Left
      </button>
      <button
        onClick={() => handleStyleChange({ align: "center" })}
        className="px-2 py-1 mr-2"
      >
        Center
      </button>
      <button
        onClick={() => handleStyleChange({ align: "right" })}
        className="px-2 py-1 mr-2"
      >
        Right
      </button>
    </div>
  );
};

export default TextSettings;
