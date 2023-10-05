import React, { useState } from "react";
import useImageAnalysisContext from "@/hooks/context/useImageAnalysisContext";
import { useImageAnalysis } from "@/hooks/useImageAnalysis";

const ImageUpload = () => {
  const [imageUrl, setImageUrl] = useState("");
  const { analyzeImage } = useImageAnalysis();
  const { setLabels } = useImageAnalysisContext();
  const handleImageUpload = async (event) => {
    event.preventDefault();
    try {
      const labels = await analyzeImage(imageUrl);
      setLabels(labels);
    } catch (error) {
      console.error("Error analyzing image_:", error);
    }
  };
  return (
    <form onSubmit={handleImageUpload}>
      <input
        type="text"
        placeholder="Enter image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        className="border text-black outline-none border-gray-300 p-2 mb-2"
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        type="submit"
      >
        Analyze Image
      </button>
    </form>
  );
};

export default ImageUpload;
