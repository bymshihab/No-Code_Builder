import React from "react";
import Sidebar from "./Sidebar";
import Canvas from "./Canvas";

const Builder = ({ onElementSelect, elements, setElements }) => (
  <div className="flex">
    <Sidebar />
    <Canvas
      onElementSelect={onElementSelect}
      elements={elements}
      setElements={setElements}
    />
  </div>
);

export default Builder;
