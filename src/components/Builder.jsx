import React from "react";
import Sidebar from "./Sidebar";
import Canvas from "./Canvas";

const Builder = ({ onAddText, onAddImage, elements }) => {
  return (
    <div className="flex">
      <Sidebar onAddText={onAddText} onAddImage={onAddImage} />
      <Canvas elements={elements} />
    </div>
  );
};

export default Builder;
