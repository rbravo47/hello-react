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
        src="https://v16-webapp.tiktok.com/285a33b9d3c41bf0f563cbe80ad51a6f/6230284d/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/6fbbef97216a4baba93adf723d8fd40a/?a=1988&br=2216&bt=1108&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3CTnz7ThRrgvDXq&l=202203142346390102452480030F7C7BC9&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amlsdDM6ZjR3OjMzZjgzM0ApZDtoNWQ3O2Q0N2U2ZGQ8OWdqanFmcjQwcDZgLS1kL2Nzc2JhXi0tMl41YGBhNTMyMV86Yw%3D%3D&vl=&vr="
      ></video>
      {/* <VideoFooter /> */}
      {/* <VideoSidebar /> */}
    </div>
  );
}

export default Video;
