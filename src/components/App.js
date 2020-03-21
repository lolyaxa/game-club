import React, { useState } from "react";
import Menu from "./menu";
import Game from "./game";
import YtbMusicPlayer from "./ytbMusicPlayer";
import { MUSIC_YTB_VIDEO_ID, MUSIC_ENABLED, SKIP_MENU } from "../constants";
import "./App.css";

function App() {
  const [gameHasStarted, setGameHasStarted] = useState(
    SKIP_MENU ? true : false
  );
  return (
    <div className="GameWrapper">
      <YtbMusicPlayer enabled={MUSIC_ENABLED} videoId={MUSIC_YTB_VIDEO_ID} />
      {!gameHasStarted && (
        <Menu onStartGameClick={() => setGameHasStarted(true)} />
      )}
      {gameHasStarted && <Game />}
    </div>
  );
}

export default App;
