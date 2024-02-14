import React, { useEffect, useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";
import useElementOnScreen from "./useElementOnScreen";
import VideoPlayButton from "./VideoPlayButton";
const Video = ({
  url,
  channel,
  description,
  song,
  likes,
  messages,
  videos,
  shares,
}) => {
  const URL = import.meta.env.VITE_REACT_APP_API_KEY;

  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };
  const isVisibile = useElementOnScreen(options, videoRef);
  const onVideoClick = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(!playing);
    } else {
      videoRef.current.play();
      setPlaying(!playing);
    }
  };
  useEffect(() => {
    if (isVisibile) {
      if (!playing) {
        videoRef.current.play();
        setPlaying(true);
      }
    } else {
      if (playing) {
        videoRef.current.pause();
        setPlaying(false);
      }
    }
  }, [isVisibile]);
  const [liked, setLiked] = useState(false);
  return (
    <div className="video">
      <video
        className="video_player"
        loop
        preload="true"
        ref={videoRef}
        onClick={onVideoClick}
        onDoubleClick={() => setLiked(true)}
        src={`${URL}/storage/videos/${videos.video}`}
      ></video>
      {/* <VideoFooter
        channel={channel}
        videos={videos}
        description={description}
        song={song}
      />
  */}
      {/* <ReelsHeader /> */}
      <VideoSidebar
        likes={likes}
        messages={messages}
        shares={shares}
        liked={liked}
        videos={videos}
        setLiked={setLiked}
      />
      {/* {!playing && <VideoPlayButton onVideoClick={onVideoClick} />} */}
    </div>
  );
};
export default Video;
