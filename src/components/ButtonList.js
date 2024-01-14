import React from 'react';
import Button from './Button';

const List = ['ALL', 'Music', 'Bollywood Music', 'Live', 'Action Thriller', 'Gaming'];

const ButtonList = ({ name }) => {
  return (
    <div className="flex">
      {List.map((name) => (
        <Button key={name} name={name} />
      ))}
    </div>
  );
};

export default ButtonList;
