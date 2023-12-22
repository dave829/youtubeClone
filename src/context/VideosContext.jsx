import { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Youtube from "../api/youtube";

const VideosContext = createContext({});

export function VideosContextProvider({ children }) {
  const { keyword } = useParams();

  const [likedVideos, setLikedVideos] = useState(null);

  //mock data
  const queryFn = async () => {
    return axios
      .get(`/videos/${keyword ? "search" : "popular"}.json`)
      .then((res) => res.data.items);
  };

  //  youtube real api
  // const queryFn = async () => {
  //   const youtube = new Youtube();
  //   return youtube.search(keyword);
  // };

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ["videos", keyword],
    queryFn,
    staleTime: 1000 * 60 * 1,
  });
  //console.log(videos);

  //   const filteredVideos =
  //     videos && videos.filter((video) => video.like === true);
  //console.log(filteredVideos); // [{…}, {…}]
  //console.log(videos); // l-bGkjtMC0Q

  const filteredDisLikedVideos =
    videos && videos.filter((videos) => videos.disLike === true);

  return (
    <VideosContext.Provider
      value={{
        keyword,
        videos,
        isLoading,
        error,
        setLikedVideos,
        //filteredVideos,
        filteredDisLikedVideos,
      }}
    >
      {children}
    </VideosContext.Provider>
  );
}

export function useVideosContext() {
  return useContext(VideosContext);
}
