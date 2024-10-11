import React from "react";

const TopBar = () => (
  <div className="flex justify-between items-center p-4 bg-gray-100 border-b">
    <h1 className="text-lg font-bold">No-Code Builder</h1>
    <div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
        Preview
      </button>
      <button className="bg-green-500 text-white px-4 py-2 rounded">
        See Source Code
      </button>
    </div>
  </div>
);

export default TopBar;
