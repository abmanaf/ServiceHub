import React from "react";

const Input = ({label, type, placeholder, onChange,error, ...props }) => {
  return (
    <div>
      <input
        {...props}
        label={label}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        error={error}
      />
    </div>
  );
};
export default Input;
