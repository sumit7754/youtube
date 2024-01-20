import React, { useEffect, useState } from 'react';
import VideoCard from './VideoCard';
import Shimmer from './Shimmer'; // Import Shimmer component for loading state
import { YOUTUBE_VIDEOS_API } from '../utils/contant';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const response = await fetch(YOUTUBE_VIDEOS_API);
      const data = await response.json();
      setVideos(data.items);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  return (
    <div className="flex flex-wrap">
      {loading
        ? // Shimmer loading state for each video card
          Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className="w-1/4 p-4">
              <Shimmer className="w-full h-40 rounded-md" />
              <div className="mt-4">
                <Shimmer className="w-4/5 h-6 mb-2 rounded-md" />
                <Shimmer className="w-1/2 h-4 rounded-md" />
              </div>
            </div>
          ))
        : videos.map((video) => (
            <Link key={video.id} to={'/watch?v=' + video.id}>
              <VideoCard info={video} />
            </Link>
          ))}
    </div>
  );
};

export default VideoContainer;
