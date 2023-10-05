import { ImageAnalysisContext } from "@/provider/imageAnalysisProvider";

const { useContext } = require("react");

const useImageAnalysisContext = () => {
  const imageAnalysisContext = useContext(ImageAnalysisContext);
  if (!imageAnalysisContext) {
    throw new Error(
      "useImageAnalysisContext has to be used within <AuthContext.Provider>"
    );
  }
  return imageAnalysisContext;
};

export default useImageAnalysisContext;
