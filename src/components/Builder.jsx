import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Canvas from "./Canvas";

const Builder = () => {
  const [elements, setElements] = useState([]);

  const handleAddText = (text, style) => {
    setElements([
      ...elements,
      { type: "Text Element", text, style, id: elements.length },
    ]);
  };

  return (
    <div className="flex">
      <Sidebar onAddText={handleAddText} />
      <Canvas elements={elements} />
    </div>
  );
};

export default Builder;
