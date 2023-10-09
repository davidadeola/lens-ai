/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { ImageIcon } from "./interface/icons/icons";

const ImageDisplay = ({ imageUrl }) => {
  const [success, setSuccess] = useState(false);
  console.log(success);
  return (
    <div className="rounded-xl border-solid border-[6px] overflow-hidden border-blue-300 bg-gray-700 my-6">
      {!success ? (
        <ImageIcon className="w-full" />
      ) : (
        <img
          src={imageUrl}
          onError={(event) => {
            setSuccess(false);
            console.log(event);
          }}
          alt=""
          width={500}
          height={500}
        />
      )}
    </div>
  );
};

export default ImageDisplay;
