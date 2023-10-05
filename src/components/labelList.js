import ImageDisplay from "./imageDisplay";

const LabelList = ({ labels, imageUrl }) => {
  return (
    <div className={`flex flex-col items-center justify-center mx-auto`}>
      <div className="rounded-xl border-solid border-[6px] overflow-hidden border-blue-300 bg-gray-700 my-6">
        <ImageDisplay imageUrl={imageUrl} />
      </div>
      <ul className="flex flex-wrap border-solid border-[3px] rounded-md border-gray-700 p-2 w-full">
        {labels.map((label, index) => (
          <li
            className="text-gray-300 mr-2 text-lg font-semibold text-center border-solid "
            key={index}
          >
            {label.description}
            {","}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LabelList;
