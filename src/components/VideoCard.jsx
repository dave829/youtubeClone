import React from "react";
import { useNavigate } from "react-router-dom";
import { format } from "timeago.js";

export const VideoCard = ({ video }) => {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const navigate = useNavigate();
  return (
    <li
      onClick={() =>
        navigate(`/videos/watch/${video.id}`, { state: { video: video } })
      }
    >
      <img src={thumbnails.medium.url} alt={title} className="w-full" />
      <div>
        <p className="font-semibold my-2">{title}</p>
        <p className="text-sm opacity-80">{channelTitle}</p>
        <p className="text-sm opacity-80">{format(publishedAt)}</p>
      </div>
    </li>
  );
};
