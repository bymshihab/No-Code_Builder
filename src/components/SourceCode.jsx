// SourceCode.jsx
import React from "react";

const SourceCode = ({ elements }) => {
  const generateHTMLCode = () => {
    const bodyContent = elements
      .map((element) => {
        if (element.type === "text") {
          return `<p style="${Object.entries(element.style)
            .map(([key, value]) => `${key}: ${value};`)
            .join(" ")}">${element.text}</p>`;
        } else if (element.type === "image") {
          return `<img src="${element.src}" width="${element.width}" height="${element.height}" style="text-align: ${element.align};" />`;
        }
        return "";
      })
      .join("\n");

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Generated Code</title>
</head>
<body>
    ${bodyContent}
</body>
</html>
    `;
  };

  return (
    <pre className="bg-gray-200 p-4 rounded overflow-x-auto">
      <code>{generateHTMLCode()}</code>
    </pre>
  );
};

export default SourceCode;
