/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { ImageIcon } from "./interface/icons/icons";
import DisplayImage from "./interface/displayImage";

const ImageDisplay = ({ imageUrl }) => {
  console.log(imageUrl);
  return (
    <div className="rounded-xl border-solid border-[6px] overflow-hidden border-blue-300 bg-gray-700 my-6">
      {!imageUrl ? (
        <ImageIcon className="w-full" />
      ) : (
        <DisplayImage
          src={imageUrl}
          className="w-full max-w-[700px]"
          fallBack="Check Image url"
        />
      )}
    </div>
  );
};

export default ImageDisplay;
