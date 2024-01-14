import React from 'react';
import Slidebar from './Slidebar';
import { Outlet } from 'react-router-dom';

const Body = () => {
  return (
    <div className="flex">
      <Slidebar />
    </div>
  );
};

export default Body;
