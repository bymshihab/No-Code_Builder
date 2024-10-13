import React from "react";

const PreviewModal = ({ isOpen, onClose, elements }) => {
  return (
    <dialog open={isOpen} className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Preview</h3>
        <p className="py-4">This is a preview of your design:</p>
        <div className="mockup-phone">
          <div className="camera"></div>
          <div className="display">
            <div className="artboard artboard-demo phone-1">
              {elements.length === 0 ? (
                <p>No elements added to the canvas.</p> // Message when no elements are present
              ) : (
                elements.map((element) => {
                  if (element.type === "text") {
                    return (
                      <p
                        key={element.id}
                        style={{
                          fontWeight: element.style.fontWeight,
                          fontStyle: element.style.fontStyle,
                          textDecoration: element.style.textDecoration,
                          textAlign: element.style.textAlign,
                        }}
                      >
                        {element.text}
                      </p>
                    );
                  } else if (element.type === "image") {
                    return (
                      <img
                        key={element.id}
                        src={element.src}
                        alt={`Preview of ${element.src}`}
                        style={{
                          width: element.width,
                          height: element.height,
                          display: "block",
                          margin: "10px auto", // Center the image
                          textAlign: element.align,
                        }}
                      />
                    );
                  }
                  return null; // In case of an unexpected type
                })
              )}
            </div>
          </div>
        </div>
        <div className="modal-action">
          <button className="btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default PreviewModal;
