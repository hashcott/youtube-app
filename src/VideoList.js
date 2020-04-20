import React from 'react';
import VideoItem from './VideoItem';
const VideoList = ({ videos, selectedVideo }) => {
  const renderList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        selectedVideo={selectedVideo}
      />
    );
  });
  return <div className='ui list'>{renderList}</div>;
};

export default VideoList;
