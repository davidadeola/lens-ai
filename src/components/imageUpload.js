import React, { useState } from "react";
import useImageAnalysisContext from "@/hooks/context/useImageAnalysisContext";
import { useImageAnalysis } from "@/hooks/useImageAnalysis";
import LabelList from "./labelList";
import ImageDisplay from "./imageDisplay";

const ImageUpload = () => {
  const { labels, setLabels } = useImageAnalysisContext();
  const [imageUrl, setImageUrl] = useState("");
  const { analyzeImage } = useImageAnalysis();

  const handleImageUpload = async (e) => {
    e.preventDefault();
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
        onSubmit={handleImageUpload}
        className="flex items-center justify-between gap-2"
      >
        <input
          type="text"
          placeholder="Enter image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="text-black outline-none  rounded p-2"
        />
        <button
          className="bg-blue-500 text-white px-4 p-2 rounded disabled:bg-blue-300 disabled:cursor-not-allowed"
          disabled={!imageUrl}
          type="submit"
        >
          Analyze Image
        </button>
      </form>
      <ImageDisplay imageUrl={imageUrl} />
      {/* <LabelList labels={labels} /> */}
    </div>
  );
};

export default ImageUpload;
