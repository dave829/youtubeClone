import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getLikedVideo,
  getRate,
  likedVideos,
  setRate,
  disLikedVideos,
  getDisLikedVideo,
} from "../api/firebase";

export default function useLikedVideos() {
  const queryClient = useQueryClient();

  //Get
  const likeVideosQuery = useQuery({
    queryKey: ["likedVideos"],
    queryFn: (filteredVideos) => getLikedVideo(filteredVideos),
    staleTime: 1000 * 60,
  });

  //Get
  const disLikeVideosQuery = useQuery({
    queryKey: ["disLikedVideos"],
    queryFn: (video) => getDisLikedVideo(video),
  });

  //ADD likedVideo
  const likedVideo = useMutation({
    mutationFn: (filteredVideos) => likedVideos(filteredVideos),
    //onSuccess: () => queryClient.invalidateQueries(["likedVideos"]), //동일한 캐시 키
  });

  //ADD disLikedVideo
  const disLikedVideo = useMutation({
    mutationFn: (filteredDisLikedVideos) =>
      disLikedVideos(filteredDisLikedVideos),
    //onSuccess: () => queryClient.invalidateQueries(["disLikedVideos"]), //동일한 캐시 키
  });

  // return
  return { likedVideo, likeVideosQuery, disLikedVideo, disLikeVideosQuery };
}
