import React, { useState } from "react";

const TextSettings = ({ onTextChange }) => {
  const [text, setText] = useState("");
  const [fontWeight, setFontWeight] = useState("normal");
  const [fontStyle, setFontStyle] = useState("normal");
  const [textDecoration, setTextDecoration] = useState("none");
  const [textAlign, setTextAlign] = useState("left");

  const handleTextChange = (e) => {
    setText(e.target.value);
    onTextChange(e.target.value); // Propagate text change to the parent
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <h3 className="text-lg font-semibold mb-2">Text Settings</h3>
      <input
        type="text"
        placeholder="Enter your text"
        value={text}
        onChange={handleTextChange}
        className="mb-4 p-2 border w-full"
      />
      <div className="flex space-x-2 mb-4">
        <button
          onClick={() =>
            setFontWeight(fontWeight === "bold" ? "normal" : "bold")
          }
          className={`p-2 border ${fontWeight === "bold" ? "bg-gray-300" : ""}`}
        >
          B
        </button>
        <button
          onClick={() =>
            setFontStyle(fontStyle === "italic" ? "normal" : "italic")
          }
          className={`p-2 border ${
            fontStyle === "italic" ? "bg-gray-300" : ""
          }`}
        >
          I
        </button>
        <button
          onClick={() =>
            setTextDecoration(
              textDecoration === "underline" ? "none" : "underline"
            )
          }
          className={`p-2 border ${
            textDecoration === "underline" ? "bg-gray-300" : ""
          }`}
        >
          U
        </button>
      </div>
      <div className="mb-4">
        <select
          value={textAlign}
          onChange={(e) => setTextAlign(e.target.value)}
          className="p-2 border"
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
      >
        Preview: {text || "Your text will appear here."}
      </div>
    </div>
  );
};

export default TextSettings;
