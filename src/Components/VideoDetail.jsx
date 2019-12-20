import React from 'react';
import Spinner from './Spinner'

const VideoDetail = ({ video }) => {
  if (!video) {
    return <Spinner style={{background:"red!important"}}/>;
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div id="videoDetail">
      <div className="ui embed">
        <iframe title="video player" src={videoSrc}></iframe>
      </div>
      <div id="details"className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
