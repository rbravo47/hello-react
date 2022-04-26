import React, { useRef, useState } from "react";
import "./Video.css";

function Video() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    console.log(playing, "playing?");
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        className="video__player"
        loop
        ref={videoRef}
        onClick={onVideoPress}
        src="https://v16-webapp.tiktok.com/be09e3db40894c2c572daef413c4fedc/6231f624/video/tos/useast2a/tos-useast2a-ve-0068c003/f893b90911b54de0a3106b61b6f7c262/?a=1988&br=3324&bt=1662&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3CTnz7ThwDfiDXq&l=20220316083710010245242169171E90B6&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anB5bTc6ZjN2OzMzNzczM0ApOjZoODo3ZDw1N2dpZTdkZmcyLmgycjRncjRgLS1kMTZzczIuMV5fNmI2YmA1X14yMzA6Yw%3D%3D&vl=&vr="
      ></video>
      {/* <VideoFooter /> */}
      {/* <VideoSidebar /> */}
    </div>
  );
}

export default Video;
