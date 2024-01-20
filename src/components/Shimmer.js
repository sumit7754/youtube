import React from 'react';

const Shimmer = ({ className }) => (
  <div className={`animate-pulse bg-gray-300 ${className}`}>
    {/* Shimmer effect using linear gradient */}
    <div className="bg-gradient-to-r from-gray-200 to-gray-400 h-full w-full bg-no-repeat bg-animate"></div>
  </div>
);

export default Shimmer;
