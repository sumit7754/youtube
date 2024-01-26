import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import YouTube from 'react-youtube';
import CommentContainer from './CommentContainer';
import LiveChat from './LiveChat';
import { addHistory } from '../utils/historySlice';
import { YOUTUBE_VIDEOS_API } from '../utils/contant';
import { addWatchLater, deleteWatchLater } from '../utils/wacthLaterSlice';

const WatchPage = () => {
  const [searchParam] = useSearchParams();
  const dispatch = useDispatch();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
    dispatch(closeMenu());
  }, [dispatch]);

  const getVideos = async () => {
    try {
      const response = await fetch(YOUTUBE_VIDEOS_API);
      const data = await response.json();
      setVideos(data.items);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  const videoId = searchParam.get('v');
  const video = videos.find((item) => item.id === videoId);

  const handleClick = (v) => {
    dispatch(addHistory(v));
    console.log('load');
  };

  const List = useSelector((store) => store.watchLater.map);

  console.log(List[video]);

  const handleWatchLater = () => {
    if (List[video]) {
      dispatch(deleteWatchLater(video));
    } else {
      dispatch(addWatchLater(video));
    }
  };

  return (
    <div className="flex flex-col mx-28 w-full">
      <div className="flex flex-row w-full">
        <div>
          <YouTube
            videoId={videoId}
            opts={{
              width: '900',
              height: '500',
              playerVars: {
                autoplay: 0,
              },
            }}
            onPlay={() => {
              handleClick(video);
            }}
          />
          <h1 className="font-bold text-xl my-2">{video?.snippet?.title}</h1>
          <button
            className={`border border-black w-18 ${List[video] ? 'bg-black text-white ' : ' bg-white text-black'}`}
            onClick={() => handleWatchLater()}
          >
            WatchLater
          </button>
        </div>

        <LiveChat />
      </div>

      <CommentContainer />
    </div>
  );
};

export default WatchPage;
