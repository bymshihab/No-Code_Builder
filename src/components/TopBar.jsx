// Updated TopBar Component
import React from "react";
import SourceCode from "./SourceCode"; // Import the SourceCode component

const TopBar = ({ onPreviewClick, elements }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-100 border-b">
      <h1 className="text-lg font-bold">No-Code Builder</h1>
      <div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          onClick={onPreviewClick}
        >
          Preview
        </button>

        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          See Source Code
        </button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Generated HTML Code:</h3>
            <SourceCode elements={elements} />{" "}
            {/* Use the SourceCode component */}
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default TopBar;
