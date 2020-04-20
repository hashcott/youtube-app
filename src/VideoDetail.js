import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading</div>;
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div id='video-detail' className='ui segment'>
      <div className='ui embed'>
        <iframe src={videoSrc} frameborder='0'></iframe>
      </div>
      <h4 className='ui header'>
        {video.snippet.title}{' '}
        {video.snippet.liveBroadcastContent === 'live' && (
          <div className='ui red label'>live</div>
        )}
      </h4>
      <div className='ui content'>
        <div className='ui meta'>
          <span className='date'>{video.snippet.publishedAt}</span>
        </div>
        <p className='description'>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
