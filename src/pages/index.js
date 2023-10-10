import ImageUpload from "@/components/imageUpload";
import LabelList from "@/components/labelList";
import useImageAnalysisContext from "@/hooks/context/useImageAnalysisContext";

export default function Home() {
  const { labels } = useImageAnalysisContext();
  return (
    <main className="min-h-screen px-4">
      <h1 className="text-2xl p-3 font-bold mb-8">LensAi</h1>
      <ImageUpload />
      <LabelList labels={labels} />
    </main>
  );
}
