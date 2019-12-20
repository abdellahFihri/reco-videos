import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  //distructuring from the props
  const renderedList = videos.map(video => {
      console.log('video id ',video.etag)
    return (
    <VideoItem key={video.etag} onVideoSelect={onVideoSelect} video={video} />
    );

});

  return <div className="ui right aligned divided list">{renderedList}</div>;
};
export default VideoList;
