import React from "react";

const TextField = ({ title }) => {
  return (
    <label>
      {title}:
      <input type="text" name="{title}" />
    </label>
  );
};

export default TextField;
