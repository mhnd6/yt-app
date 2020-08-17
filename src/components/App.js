import React, { useState, useEffect } from "react";
import SearchBar from "./SearchhBar";
import VideoList from "../components/VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {
  const [selectedVid, setSelectedVid] = useState(null);
  const [videos, search] = useVideos("dark knight");

  // setSelectedVid(videos[0]);

  useEffect(() => {
    setSelectedVid(videos[0]);
  }, [videos]);

  return (
    <div className="ui container">
      <SearchBar onTermSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            {selectedVid ? <VideoDetail video={selectedVid} /> : null}
          </div>
          <div className="five wide column">
            <VideoList onVidSelect={setSelectedVid} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
