import React from "react";
import Youtube from "../api/youtube";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const ChannelInfo = ({ id, name }) => {
  //mock data
  const queryFn = async () => {
    return (
      axios
        .get(`/videos/channel.json`)
        .then((res) => res.data.items[0].snippet.thumbnails.default.url),
      { staleTime: 1000 * 60 * 5 }
    );
  };

  //  youtube real api
  //   const queryFn = async () => {
  //     const youtube = new Youtube();
  //     return youtube.channelImageURL(id);
  //   };

  const { data: url } = useQuery({
    queryKey: ["channel", id],
    queryFn,
    staleTime: 1000 * 60 * 5,
  });

  return (
    <div>
      {url && <img src={url} alt={name} />}
      <p>{name}</p>
    </div>
  );
};
