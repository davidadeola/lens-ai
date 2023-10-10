import { useCallback, useEffect, useState } from "react";

function testImageUrl(url) {
  return new Promise(function (resolve, reject) {
    var image = new Image();
    image.src = url;
    image.addEventListener("load", () => resolve(url));
    image.addEventListener("error", reject);
  });
}

const DisplayImage = ({ src, fallBack = "", ...props }) => {
  const [actualUrl, setActualUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImage = useCallback(async () => {
    try {
      setLoading(true);
      const _actualUrl = await testImageUrl(src);
      setActualUrl(_actualUrl);
    } catch (error) {
      setActualUrl(null);
    }
    setLoading(false);
  }, [src]);

  useEffect(() => {
    handleImage();
  }, [handleImage]);

  return loading ? (
    "Loading..."
  ) : actualUrl === null ? (
    fallBack
  ) : (
    <img src={actualUrl} alt="" {...props} />
  );
};

export default DisplayImage;
