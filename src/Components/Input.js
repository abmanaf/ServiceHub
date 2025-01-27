import React from "react";

const Input = ({ label, type, placeholder, onChange, ...props }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        {...props}
        label={label}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};
export default Input;
