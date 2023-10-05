import React, { useState } from "react";
import useImageAnalysisContext from "@/hooks/context/useImageAnalysisContext";
import { useImageAnalysis } from "@/hooks/useImageAnalysis";
import LabelList from "./labelList";

const ImageUpload = () => {
  const [imageUrl, setImageUrl] = useState("");
  const { analyzeImage } = useImageAnalysis();
  const { labels, setLabels } = useImageAnalysisContext();
  const handleImageUpload = async (event) => {
    event.preventDefault();
    try {
      const labels = await analyzeImage(imageUrl);
      setLabels(labels);
    } catch (error) {
      console.error("Error analyzing image:", error);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <form
        className="flex items-center justify-between gap-2"
        onSubmit={handleImageUpload}
      >
        <input
          type="text"
          placeholder="Enter image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="text-black outline-none  rounded p-2"
        />
        <button
          className="bg-blue-500 text-white px-4 p-2 rounded"
          type="submit"
        >
          Analyze Image
        </button>
      </form>
      <div>
        <LabelList labels={labels} imageUrl={imageUrl} />
      </div>
    </div>
  );
};

export default ImageUpload;
