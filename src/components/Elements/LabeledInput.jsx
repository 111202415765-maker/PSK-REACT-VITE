import React from "react";

function LabeledInput(props) {
  const { label, name, type = "text", placeholder } = props;

  return (
    <>
      <div className="mb-4">
        <label
          htmlFor={name}
          className="mb-2 block text-sm font-medium text-defaultBlack"
        >
          {label}
        </label>
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          className="h-12 w-full rounded-md border border-gray-05 bg-white px-4 text-sm text-defaultBlack placeholder:text-gray-03 focus:border-primary focus:outline-none"
        />
      </div>
    </>
  );
}

export default LabeledInput;
