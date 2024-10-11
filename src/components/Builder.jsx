import React from "react";
import Sidebar from "./Sidebar";
import Canvas from "./Canvas";

const Builder = () => (
  <div className="flex">
    <Sidebar />
    <Canvas />
  </div>
);

export default Builder;
