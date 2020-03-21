import React from "react";
import "./ytbMusicPlayer.css";

function YtbMusicPlayer(props) {
  const { videoId, enabled } = props;
  if (enabled) {
    return (
      <iframe
        title="music"
        id="music"
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    );
  } else {
    return <div />;
  }
}

export default YtbMusicPlayer;
