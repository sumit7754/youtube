import React from 'react';

const Button = ({ name }) => {
  return (
    <div className="flex">
      <button className="p-2 m-2 shadow-md  rounded-lg border-gray-400">{name}</button>
    </div>
  );
};

export default Button;
