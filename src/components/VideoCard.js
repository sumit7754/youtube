const VideoCard = ({ info }) => {
  if (!info || !info.snippet || !info.statistics) {
    return null;
  }

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  if (!thumbnails || !thumbnails.medium || !thumbnails.high) {
    return null;
  }

  return (
    <div className="p-2 m-2 shadow-lg w-72">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className=" font-bold line-clamp-2">{title}</li>
        <li className="  text-gray-600">{channelTitle}</li>
        <li className="text-gray-600">{statistics.viewCount} Views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
