/* eslint-disable @next/next/no-img-element */
// import Image from "next/image";

const LabelList = ({ labels, imageUrl }) => {
  return (
    <div className={`flex flex-col items-center justify-center mx-auto`}>
      <img
        src={imageUrl}
        alt=""
        className="rounded-lg border-solid border-[6px] border-blue-300 bg-gray-600 my-6"
        width={500}
        height={500}
        // defaultValue={}
      />
      <ul className="flex border-solid border-[3px] p-2 border-red-600 w-full">
        {labels.map((label, index) => (
          <li className="mr-2" key={index}>
            {label.description}
            {","}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LabelList;
