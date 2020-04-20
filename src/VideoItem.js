import './VideoItem.css';
import React from 'react';

const VideoItem = ({ video, selectedVideo }) => {
  return (
    <div onClick={() => selectedVideo(video)} className='video-item item'>
      <a href='#video-detail'>
        <img
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
          className='ui image'
        />
        <div className='content'>
          <div className='header'>{video.snippet.title}</div>
        </div>
      </a>
    </div>
  );
};

export default VideoItem;
