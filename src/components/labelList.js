const LabelList = ({ labels }) => {
  if (labels.length === 0) return null;
  return (
    <div
      className={`flex flex-col items-center justify-center mx-auto w-full max-w-[700px]`}
    >
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
