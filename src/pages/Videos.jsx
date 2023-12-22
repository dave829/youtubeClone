import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { VideoCard } from "../components/VideoCard";
import axios from "axios";
import Youtube from "../api/youtube";
import { useVideosContext } from "../context/VideosContext";

export const Videos = () => {
  const { keyword, videos, isLoading, error } = useVideosContext();
  //const { keyword } = useParams();

  //mock data
  // const queryFn = async () => {
  //   return axios
  //     .get(`/videos/${keyword ? "search" : "popular"}.json`)
  //     .then((res) => res.data.items);
  // };

  //  youtube real api
  // const queryFn = async () => {
  //   const youtube = new Youtube();
  //   return youtube.search(keyword);
  // };

  // const {
  //   isLoading,
  //   error,
  //   data: videos,
  // } = useQuery({
  //   queryKey: ["videos", keyword],
  //   queryFn,
  //   staleTime: 1000 * 60 * 1,
  // });
  //console.log(videos);

  return (
    <>
      <div>
        {keyword ? `🔍${keyword}` : "🔥hot trend"}
        {isLoading && <p>Loading...</p>}
        {error && <p>error</p>}
        {videos && (
          <ul className="grid grid-cols-1 sm:grid-col-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4">
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
