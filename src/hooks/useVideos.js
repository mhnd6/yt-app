import { useState, useEffect } from "react";
import youtube from "../api/youtube";
const KEY = "Your Yuotube API";

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        key: KEY,
        type: "video",
      },
    });

    setVideos(response.data.items);
  };

  return [videos, search];
};

export default useVideos;
