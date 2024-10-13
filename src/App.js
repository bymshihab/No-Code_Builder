import React, { useState } from "react";
import TopBar from "./components/TopBar";
import Builder from "./components/Builder";
import PreviewModal from "./components/PreviewModal"; // Import the PreviewModal component

function App() {
  const [elements, setElements] = useState([]); // State to hold the elements
  const [isPreviewOpen, setPreviewOpen] = useState(false); // State for modal visibility

  const handleAddText = (text, style) => {
    setElements((prevElements) => [
      ...prevElements,
      { type: "text", text, style, id: prevElements.length },
    ]);
  };

  const handleAddImage = (imageSettings) => {
    const newElement = {
      id: Date.now(), // Unique ID based on timestamp
      type: "image",
      src: imageSettings.src,
      width: imageSettings.width,
      height: imageSettings.height,
      align: imageSettings.align,
    };

    setElements((prevElements) => [...prevElements, newElement]);
  };

  const openPreview = () => setPreviewOpen(true); // Function to open the preview modal
  const closePreview = () => setPreviewOpen(false); // Function to close the preview modal

  return (
    <div>
      <TopBar onPreviewClick={openPreview} /> {/* Pass function to TopBar */}
      <Builder
        onAddText={handleAddText}
        onAddImage={handleAddImage}
        elements={elements}
      />{" "}
      {/* Pass props to Builder */}
      {/* Preview Modal */}
      <PreviewModal
        isOpen={isPreviewOpen}
        onClose={closePreview}
        elements={elements} // Pass elements to PreviewModal
      />
    </div>
  );
}

export default App;
