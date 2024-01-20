import React from 'react';
import SearchVideoCard from './SearchVideoCard';
import { useSelector } from 'react-redux';

const HistoryVideos = () => {
  const List = useSelector((store) => store.History.List);

  return (
    <div>
      {List.map((item) => (
        <SearchVideoCard info={item} />
      ))}
    </div>
  );
};

export default HistoryVideos;
