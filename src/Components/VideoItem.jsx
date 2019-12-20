import React from "react";
import "./VideoItem.css";



const VideoItem = ({ video, onVideoSelect }) => {
  
  return (
    <a href="#searchBar">
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      {/*  got tho make call back with ()=> and video as argument */}
      <img
        className="ui image"
        src={video.snippet.thumbnails.default.url}
        alt={video.snippet.title}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
    </a>
  );
};
export default VideoItem;
