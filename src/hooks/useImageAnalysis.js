export const useImageAnalysis = () => {
  const analyzeImage = async (imageUrl) => {
    const response = await fetch("/api/analyze-image", {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ imageUrl }),
    });
    if (!response.ok) {
      throw new Error("Error analyzing image");
    }

    const data = await response.json();
    console.log(data.labels);
    return data.labels;
  };
  return { analyzeImage };
};
