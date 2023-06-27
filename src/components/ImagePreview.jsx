

import React from "react";

const ImagePreview = ({ selectedFile }) => {
  if (!selectedFile) {
    return null; // If no file is selected, don't render anything
  }

  const reader = new FileReader();

  const handleImageLoad = (event) => {
    const result = reader.result;
    
    const img = document.getElementById("img");
    img.src = result;
  };

  reader.onload = handleImageLoad;
 reader.readAsDataURL(selectedFile);
 

  return <img id="img"  alt="Preview" />;
};

export default ImagePreview;
