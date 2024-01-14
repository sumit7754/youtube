import React from 'react';
import { useSearchParams } from 'react-router-dom';

const WatchLater = () => {
  const [searchParam] = useSearchParams();

  return (
    <div>
      <h1> WatchLater</h1>
    </div>
  );
};

export default WatchLater;
