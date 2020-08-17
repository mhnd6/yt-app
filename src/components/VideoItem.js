import React from "react";
import "./videoItem.css";
const VideoItem = ({ video, onVidSelect }) => {
  return (
    <div onClick={() => onVidSelect(video)} className="video-item item">
      <img
        alt={video.snippet.title}
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div style={{ color: "#fff" }} className="header">
          {video.snippet.title}
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
