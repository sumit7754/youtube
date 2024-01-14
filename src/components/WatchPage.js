import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { Link, useSearchParams } from 'react-router-dom';
import { YOUTUBE_VIDEOS_API } from '../utils/contant';
import CommentContainer from './CommentContainer';
import LiveChat from './LiveChat';
import { addItem, print } from '../utils/historySlice';

const WatchPage = () => {
  const [searchParam] = useSearchParams();
  const dispatch = useDispatch();

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const response = await fetch(YOUTUBE_VIDEOS_API);
      const data = await response.json();
      setVideos(data.items);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  const video = videos.find((item) => item.id === searchParam.get('v'));

  const handleClick = (video) => {
    dispatch(addItem(video));
  };

  return (
    <>
      <div className="flex flex-col mx-28 w-full">
        <div className="flex flex-row w-full">
          <div>
            <iframe
              onClick={() => handleClick(video)}
              className="rounded-lg"
              width="900"
              height="500"
              src={'https://www.youtube.com/embed/' + searchParam.get('v')}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <h1 className="font-bold text-xl my-2">{video?.snippet?.title}</h1>
          </div>

          <LiveChat />
        </div>
        <CommentContainer />
      </div>
    </>
  );
};

export default WatchPage;
