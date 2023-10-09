import cloudinary from "cloudinary";
import vision from "@google-cloud/vision";
// Configure Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_API_KEY,
  api_secret: process.env.NEXT_PUBLIC_API_SECRET,
});

const visionClient = new vision.ImageAnnotatorClient({
  keyFilename: "./credentials/my-credentials.json",
});

const analyzeImage = async (imageUrl) => {
  try {
    // Upload the image to cloudinary
    // const cloudinaryResponse = await cloudinary.v2.uploader.upload(imageUrl);

    // Analyze the image using Google Vision API
    const [result] = await visionClient.labelDetection(imageUrl);
    const labels = result.labelAnnotations;
    console.log(labels);
    return labels;
  } catch (error) {
    console.error("Error analyzing image:", error);
    throw new Error("An error occurred while analyzing the image");
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method Not Allowed" });
    return;
  }

  const { imageUrl } = req.body;

  try {
    const labels = await analyzeImage(imageUrl);
    console.log(labels);
    res.status(200).json({ labels });
  } catch (error) {
    res.status(500).json({ error: error.message || "An error occurred" });
  }
};
