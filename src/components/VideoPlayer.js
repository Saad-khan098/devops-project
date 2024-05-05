// eslint-disable-next-line react/no-unescaped-entities
import React from "react";

const VideoPlayer = () => {
  return (
    <video muted autoPlay loop playsInline>
      <source src="/videos/audio-spectrum-hevc.mov" type="video/quicktime" />
      <source
        src="https://res.cloudinary.com/dve29eglj/video/upload/v1699376316/audio-spectrum-VP9_m2uxuk.webm"
        type="video/webm"
      />
      Sorry, your browser doesn't support embedded videos.
    </video>
  );
};

export default VideoPlayer;
