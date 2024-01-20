import React, { useEffect, useState } from 'react';
import Shimmer from './Shimmer';

const SearchVideoCard = ({ info }) => {
  const [loadingEffect, setLoadingEffect] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingEffect(false);
    }, 1000); // Adjust the timeout duration as needed

    return () => clearTimeout(timer);
  }, []);

  if (!info || !info.snippet || !info.snippet.title || !info.snippet.channelTitle || !info.snippet.thumbnails) {
    return null;
  }

  const { snippet } = info;

  console.log(info);

  return (
    <div className="flex p-4 border border-gray-300 rounded-lg shadow-md mx-6">
      <div className="w-1/4">
        {loadingEffect ? (
          <Shimmer className="w-full h-32 rounded-md" />
        ) : (
          <img alt="thumbnail" className="w-full  h-48 rounded-md object-cover" src={snippet.thumbnails.high.url} />
        )}
      </div>
      <div className="ml-4 flex-1">
        {loadingEffect ? (
          <Shimmer className="w-full h-6 rounded-md" />
        ) : (
          <h1 className="font-bold text-md mb-2">{snippet.title}</h1>
        )}
        <div className="flex items-center mb-2 ">
          {loadingEffect ? (
            <Shimmer className="w-6 h-6 rounded-full" />
          ) : (
            <img
              alt="channel-logo"
              className="w-6 h-6 rounded-full mr-2"
              src={snippet.thumbnails.default.url} // Replace 'channelLogoUrl' with the actual property for the channel logo
            />
          )}
          {loadingEffect ? (
            <Shimmer className="w-2/3 h-4 ml-2 rounded-md" />
          ) : (
            <div className="text-gray-600 text-sm">{snippet.channelTitle}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchVideoCard;
