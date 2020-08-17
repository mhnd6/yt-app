import React from "react";

const VideoDetail = ({ video }) => {
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe title="player" src={videoSrc} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">
          {video.snippet.title}
          <p>{video.snippet.description}</p>
        </h4>
      </div>
    </div>
  );
};

export default VideoDetail;
