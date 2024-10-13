// Updated App Component
import React, { useState } from "react";
import TopBar from "./components/TopBar";
import Builder from "./components/Builder";
import PreviewModal from "./components/PreviewModal";

function App() {
  const [elements, setElements] = useState([]);
  const [isPreviewOpen, setPreviewOpen] = useState(false);

  const handleAddText = (text, style) => {
    setElements((prevElements) => [
      ...prevElements,
      { type: "text", text, style, id: prevElements.length },
    ]);
  };

  const handleAddImage = (imageSettings) => {
    const newElement = {
      id: Date.now(),
      type: "image",
      src: imageSettings.src,
      width: imageSettings.width,
      height: imageSettings.height,
      align: imageSettings.align,
    };

    setElements((prevElements) => [...prevElements, newElement]);
  };

  const openPreview = () => setPreviewOpen(true);
  const closePreview = () => setPreviewOpen(false);

  return (
    <div>
      <TopBar onPreviewClick={openPreview} elements={elements} />{" "}
      {/* Pass elements */}
      <Builder
        onAddText={handleAddText}
        onAddImage={handleAddImage}
        elements={elements}
      />
      <PreviewModal
        isOpen={isPreviewOpen}
        onClose={closePreview}
        elements={elements}
      />
    </div>
  );
}

export default App;
