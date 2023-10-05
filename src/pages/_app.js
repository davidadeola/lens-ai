import { ImageAnalysisProvider } from "@/provider/imageAnalysisProvider";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ImageAnalysisProvider>
      <Component {...pageProps} />
    </ImageAnalysisProvider>
  );
}
