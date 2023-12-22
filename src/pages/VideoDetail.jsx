import React from "react";
import { useLocation } from "react-router-dom";
import { ChannelInfo } from "../components/ChannelInfo";
import { LikeDisLike } from "../components/LikeDisLike";
import { Comments } from "../components/Comments";

function VideoDetail() {
  const {
    state: { video },
  } = useLocation();
  //console.log(video);
  const { title, channelId, channelTitle, description } = video.snippet;

  const videoSnippet = video.snippet;
  //console.log(videoSnippet);

  // const filteredVideos =
  //   video && video.filter((videos) => videos.like === true);

  // console.log(filteredVideos);

  return (
    <section>
      <article>
        <iframe
          id="player"
          type="text/html"
          width="100%"
          height="640"
          src={`https://www.youtube.com/embed/${video.id}`}
          style={{ border: "none" }}
          title={title}
        />
        <div>
          <h2 className="font-bold text-6xl mb-10">{title}</h2>
          <Comments />
          <LikeDisLike videoSnippet={videoSnippet} video={video} />
          <ChannelInfo id={channelId} name={channelTitle} />
          <pre>{description}</pre>
        </div>
      </article>
      <section>{/* <RelatedVideos id={video.id} /> */}</section>
    </section>
  );
}

export default VideoDetail;
