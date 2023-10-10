/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { ImageIcon } from "./interface/icons/icons";

const ImageDisplay = ({ imageUrl }) => {
  console.log(imageUrl);
  return (
    <div className="rounded-xl border-solid border-[6px] overflow-hidden border-blue-300 bg-gray-700 my-6">
      {!imageUrl ? (
        <ImageIcon className="w-full" />
      ) : (
        <img src={imageUrl} alt="" width={600} height={600} />
      )}
    </div>
  );
};

export default ImageDisplay;
