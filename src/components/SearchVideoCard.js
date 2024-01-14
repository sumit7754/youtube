import React from 'react';

const SearchVideoCard = ({ info }) => {
  if (!info || !info.snippet || !info.snippet.title || !info.snippet.channelTitle || !info.snippet.thumbnails) {
    return null;
  }

  const { snippet } = info;

  return (
    <div className="flex p-2 m-2">
      <img alt="thumbnail" className="w-96 h-56" src={snippet.thumbnails.high.url} />
      <div>
        <h1 className="font-bold text-xl ml-4 px-2">{snippet.title}</h1>
        <div className="ml-4 px-2"></div>
      </div>
    </div>
  );
};

export default SearchVideoCard;
