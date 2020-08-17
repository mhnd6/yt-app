import React from "react";
import VideoItem from "../components/VideoItem";

const VideoList = ({ videos, onVidSelect }) => {
  const rendered = videos.map((vid) => {
    return (
      <VideoItem key={vid.id.videoId} onVidSelect={onVidSelect} video={vid} />
    );
  });
  return <div className="ui relaxed divided list">{rendered}</div>;
};

export default VideoList;
