import React from "react";
import { useNavigate } from "react-router-dom";
import { format } from "timeago.js";
import { FcLike } from "react-icons/fc";

export const RateVideoCard = ({ video }) => {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const navigate = useNavigate();

  //   const videosList = (
  //     <li
  //       onClick={() =>
  //         navigate(`/videos/watch/${video.id}`, { state: { video: video } })
  //       }
  //     >
  //       <img src={thumbnails.medium.url} alt={title} className="w-full" />
  //       <div>
  //         <p className="font-semibold my-2">{title}</p>
  //         <p className="text-sm opacity-80">{channelTitle}</p>
  //         <p className="text-sm opacity-80">{format(publishedAt)}</p>
  //         {/* <p className="text-sm opacity-80">{liked }<FcLike /></p> */}
  //       </div>
  //     </li>
  //   );

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
        {/* <p className="text-sm opacity-80">{liked }<FcLike /></p> */}
      </div>
    </li>
  );
};
