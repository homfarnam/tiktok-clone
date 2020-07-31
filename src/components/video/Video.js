import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "../video-footer/VideoFooter";
import VideoSideBar from "../video-sidebar/VideoSideBar";

const Video = ({
  url,
  channel,
  description,
  song,
  likes,
  messages,
  shares,
}) => {
  const videoRef = useRef(null);
  const [playing, setplaying] = useState(false);

  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setplaying(false);
    } else {
      videoRef.current.play();
      setplaying(true);
    }
  };

  return (
    <div className="video">
      <video
        src={url}
        className="video__player"
        loop
        onClick={onVideoPress}
        ref={videoRef}
      ></video>
      <VideoSideBar likes={likes} shares={shares} messages={messages} />
      <VideoFooter
        channel={channel}
        description={description}
        song={song}
      />
    </div>
  );
};

export default Video;
