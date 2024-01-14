import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import SearchVideoCard from './SearchVideoCard';

const SearchVideos = () => {
  const [searchParam] = useSearchParams();
  const [videos, setVideos] = useState([]);
  const [filteredVideos, setFilteredVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  const query = searchParam.get('n');

  useEffect(() => {
    if (!query || query.length === 0) {
      // Handle the case where 'n' is not present or has a length of 0
      return;
    }

    const getVideos = async () => {
      try {
        const data = await fetch(
          `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelType=channelTypeUnspecified&maxResults=25&q=${query}&key=AIzaSyAi-SPH8PN-Je8qs_yropzX4kTdmcS54XU`,
        );
        const json = await data.json();

        if (json.items) {
          setVideos(json.items);
        } else {
          console.error('API response is missing the "items" property:', json);
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching videos:', error);
        setLoading(false);
      }
    };

    getVideos();
  }, [query]);

  useEffect(() => {
    const filtered = videos.filter((item) => item.id.kind === 'youtube#video');
    setFilteredVideos(filtered);
  }, [videos]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-2 m-2">
      {filteredVideos.map((video) => (
        <Link key={video.id.videoId} to={'/watch?v=' + video.id.videoId}>
          <SearchVideoCard key={video.id.videoId} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default SearchVideos;
