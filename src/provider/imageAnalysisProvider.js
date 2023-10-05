const { createContext, useState } = require("react");

export const ImageAnalysisContext = createContext();

export const ImageAnalysisProvider = ({ children }) => {
  const [labels, setLabels] = useState([]);
  return (
    <ImageAnalysisContext.Provider value={{ labels, setLabels }}>
      {children}
    </ImageAnalysisContext.Provider>
  );
};
