import React, { useState } from "react";

const TextSettings = ({ onAddText }) => {
  const [text, setText] = useState("");
  const [fontWeight, setFontWeight] = useState("normal");
  const [fontStyle, setFontStyle] = useState("normal");
  const [textDecoration, setTextDecoration] = useState("none");
  const [textAlign, setTextAlign] = useState("left");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleAddText = () => {
    const defaultStyle = {
      fontWeight: fontWeight || "normal",
      fontStyle: fontStyle || "normal",
      textDecoration: textDecoration || "none",
      textAlign: textAlign || "left",
    };
    onAddText(text, defaultStyle);

    // Reset settings to default values
    setText("");
    setFontWeight("normal");
    setFontStyle("normal");
    setTextDecoration("none");
    setTextAlign("left");
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-[25rem]">
      <h3 className="text-xl font-semibold mb-4">Text Settings</h3>
      <input
        type="text"
        placeholder="Enter your text"
        value={text}
        onChange={handleTextChange}
        className="mb-4 p-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
      />
      <div className="flex space-x-2 mb-4">
        <button
          onClick={() =>
            setFontWeight(fontWeight === "bold" ? "normal" : "bold")
          }
          className={`p-3 border rounded-lg border-gray-300 transition duration-200 ${
            fontWeight === "bold" ? "bg-gray-300" : ""
          }`}
        >
          <span className="font-bold">B</span>
        </button>
        <button
          onClick={() =>
            setFontStyle(fontStyle === "italic" ? "normal" : "italic")
          }
          className={`p-3 border rounded-lg border-gray-300 transition duration-200 ${
            fontStyle === "italic" ? "bg-gray-300" : ""
          }`}
        >
          <span className="italic">I</span>
        </button>
        <button
          onClick={() =>
            setTextDecoration(
              textDecoration === "underline" ? "none" : "underline"
            )
          }
          className={`p-3 border rounded-lg border-gray-300 transition duration-200 ${
            textDecoration === "underline" ? "bg-gray-300" : ""
          }`}
        >
          <span className="underline">U</span>
        </button>
      </div>
      <div className="mb-4">
        <select
          value={textAlign}
          onChange={(e) => setTextAlign(e.target.value)}
          className="p-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        >
          <option value="left">Align Left</option>
          <option value="center">Align Center</option>
          <option value="right">Align Right</option>
        </select>
      </div>
      <div
        style={{
          fontWeight: fontWeight,
          fontStyle: fontStyle,
          textDecoration: textDecoration,
          textAlign: textAlign,
        }}
        className="mb-4 text-gray-700"
      >
        <strong>Preview:</strong> {text || "Your text will appear here."}
      </div>
      <div className="flex justify-end">
        <button
          onClick={handleAddText}
          className="bg-teal-700 text-white px-4 py-2 rounded-lg hover:bg-teal-800 transition duration-200"
        >
          Add Text
        </button>
      </div>
    </div>
  );
};

export default TextSettings;
