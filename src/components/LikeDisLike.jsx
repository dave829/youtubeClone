import React, { useEffect, useState } from "react";
import { GrLike, GrDislike } from "react-icons/gr";
import { disLikedVideos, getRate, rate } from "../api/firebase";
import { useQuery } from "@tanstack/react-query";
import useRate from "../hooks/useRate";
import { useVideosContext } from "../context/VideosContext";
import useLikedVideos from "../hooks/useLikedVideos";

export const LikeDisLike = ({ videoSnippet, video }) => {
  const [like, setLike] = useState(true);
  const [disLike, setDisLike] = useState(true);
  //console.log(like);

  //console.log(video);

  //   useEffect(() => {
  //     console.log(like + "useEffect");
  //   }, [like]);

  const { addRate } = useRate();

  const { likedVideo, disLikedVideo } = useLikedVideos();

  const { filteredDisLikedVideos, videos } = useVideosContext();
  //console.log(filteredVideos); //[{…}, {…}, {…}]

  //const { filteredVideos } = useVideosContext();
  //console.log(filteredVideos);
  //   const {
  //     isLoading,
  //     error,
  //     data: liked,
  //   } = useQuery({
  //     queryKey: ["liked"],
  //     queryFn: likebtn,
  //     //staleTime: 1000 * 60 * 1,
  //   });

  //   rate.mutate(like);

  //   const getdata = getRate();
  //   console.log(getdata);

  //   const { data: liked } = useQuery({
  //     queryKey: ["liked"],
  //     queryFn: () => getRate(),
  //   });

  //console.log(liked.like);

  //클릭
  const likebtn = () => {
    //const likes = liked.like;
    setLike(like);
    // //console.log(like + "유즈스테이트");
    video.like = like; // 바로 넣기
    //like && addRate.mutate(like); // 파이어베이스
    const filteredVideos =
      videos && videos.filter((video) => video.like === true);

    likedVideo.mutate(filteredVideos); //[{…}, {…}, {…}]

    // //console.log(videoSnippet.like);
    //console.log(filteredVideos);
    //console.log(video.like);
    //console.log(videos);

    // console.log(video.like);
    // console.log(filteredVideos);
  };

  const disLikebtn = () => {
    setDisLike(disLike);
    // //console.log(like + "유즈스테이트");
    //addRate.mutate(like); // 파이어베이스
    const filteredDisLikedVideos =
      videos && videos.filter((videos) => videos.disLike === true);
    disLikedVideo.mutate(filteredDisLikedVideos); //[{…}, {…}, {…}]
    video.disLike = disLike; // 바로 넣기
    // //console.log(videoSnippet.like);
    // console.log(video);
  };

  return (
    <div className="font-bold text-3xl ml-5 mb-9">
      <button className="ml-8" onClick={likebtn}>
        Like
        <GrLike />
      </button>
      <button className="ml-8" onClick={disLikebtn}>
        DisLike
        <GrDislike />
      </button>
    </div>
  );
};
