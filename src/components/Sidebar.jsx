import React from "react";

const Sidebar = () => (
  <div className="w-1/4 p-4 bg-gray-100 border-r">
    <h2 className="text-xl font-semibold mb-4">Elements</h2>
    <div className="flex flex-col space-y-4">
      <div draggable className="p-4 bg-white rounded shadow cursor-pointer">
        Text Element
      </div>
      <div draggable className="p-4 bg-white rounded shadow cursor-pointer">
        Image Element
      </div>
    </div>
  </div>
);

export default Sidebar;
