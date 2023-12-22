import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useVideosContext } from "../context/VideosContext";
import { VideoCard } from "../components/VideoCard";
import { RateVideoCard } from "../components/RateVideoCard";
import useRate from "../hooks/useRate";
import useLikedVideos from "../hooks/useLikedVideos";

export const Myvideos = () => {
  const [like, setLike] = useState(false);
  //console.log(like);
  const { rateQuery } = useRate();
  const { videos } = useVideosContext();

  const { likeVideosQuery, disLikeVideosQuery } = useLikedVideos();
  //console.log(likeVideosQuery.data); // [{…}, {…}]

  const likedVideos = likeVideosQuery.data;
  //console.log(likedVideos); //{video: Array(1)} -> video : [{…}]

  const disLikedVideos = disLikeVideosQuery.data;
  //console.log(disLikedVideos); //

  //console.log(videos[1].snippet);
  //console.log(rateQuery.data); //{like: false}

  //const videoList = videos.map((video) => console.log(video.snippet.title));
  //console.log(videoList);

  //   const videoSnippet = videos.snippet;
  //   console.log(videoSnippet);

  //   //mock data
  //   const queryFn = async () => {
  //     return axios
  //       .get(`/videos/${keyword ? "search" : "popular"}.json`)
  //       .then((res) => res.data.items);
  //   };

  //   const {
  //     isLoading,
  //     error,
  //     data: videos,
  //   } = useQuery({
  //     queryKey: ["videos"],
  //     queryFn,
  //     staleTime: 1000 * 60 * 5,
  //   });
  //   console.log(videos);

  //   const likedListVideos = like ? (
  //     videos.map((video) => <RateVideoCard key={video.id} video={video} />)
  //   ) : (
  //     <p>no liked videos</p>
  //   );

  //   const listVideos = videos.map((video) => {
  //     console.log(video.snippet);
  //     return <RateVideoCard key={video.id} video={video} />;
  //   });

  //   const filteredVideos =
  //     videos && videos.filter((videos) => videos.like === true);
  //console.log(filteredVideos); // [{…}]
  //console.log(filteredVideos.id);

  return (
    <section>
      <div>
        <h1 className="font-bold text-6xl">Like Videos</h1>
        <ul className="grid grid-cols-1 sm:grid-col-2 lg:grid-cols-3 xl:grid-cols-6 2xl:grid-cols-5 gap-2 gap-y-4">
          {likedVideos ? (
            likedVideos &&
            likedVideos.map((video) => (
              <RateVideoCard key={video.id} video={video} />
            ))
          ) : (
            <p>no liked videos</p>
          )}
        </ul>
      </div>
      <div className="mt-28">
        <h1 className="font-bold text-6xl">Dislike Videos</h1>
        <ul className="grid grid-cols-1 sm:grid-col-2 lg:grid-cols-3 xl:grid-cols-6 2xl:grid-cols-5 gap-2 gap-y-4">
          {disLikedVideos ? (
            disLikedVideos &&
            disLikedVideos.map((video) => (
              <RateVideoCard key={video.id} video={video} />
            ))
          ) : (
            <p>no liked videos</p>
          )}
        </ul>
      </div>
    </section>
  );
};
