import React from "react";

function CheckBox(props) {
  const { name, children } = props;

  return (
    <>
      <label
        htmlFor={name}
        className="flex items-center gap-2 text-sm text-gray-01"
      >
        <input
          id={name}
          name={name}
          type="checkbox"
          className="h-4 w-4 rounded border-gray-04 accent-primary"
        />
        {children}
      </label>
    </>
  );
}

export default CheckBox;
