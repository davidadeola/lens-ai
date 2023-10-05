import ImageUpload from "@/components/imageUpload";

export default function Home() {
  return (
    <main className="min-h-screen px-4">
      <h1 className="text-2xl p-3 font-bold mb-8">LensAi</h1>
      <ImageUpload />
    </main>
  );
}
