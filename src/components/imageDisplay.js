/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ImageIcon } from "./interface/icons/icons";

const ImageDisplay = ({ imageUrl }) => {
  return (
    <>
      {!imageUrl ? (
        <ImageIcon className="w-full" />
      ) : (
        <img src={imageUrl} alt="" width={500} height={500} />
      )}
    </>
  );
};

export default ImageDisplay;
