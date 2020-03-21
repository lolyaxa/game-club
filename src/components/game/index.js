import React, { useState } from "react";
import scenario from "../../data/scenario.js";
import "./game.css";

const STORAGE_KEY = "gayclubsave";

function saveProgress(sceneid, point) {
  console.log(sceneid, point);
  localStorage.setItem(STORAGE_KEY, sceneid + "_" + point);
}

function loadProgress() {
  const data = localStorage.getItem(STORAGE_KEY);
  console.log(data);
  if (data === null) {
    return [1, 0];
  } else {
    return data.split("_").map((datum) => parseInt(datum));
  }
}

function Game() {
  // const [savedSceneid, savedPoints] = loadProgress();
  const [sceneid, setSceneid] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const [showNo, setShowNo] = useState(false);
  const [points, setPoints] = useState(1);
  const currentScene = scenario.scenes.find((scene) => scene.id === sceneid);
  const currentCharacter = scenario.characters.find(
    (character) => character.name === currentScene.name
  );
  const currentBackground = scenario.background.find(
    (background) => background.place === currentScene.background
  );
  // saveProgress(sceneid, points);
  return (
    <div
      className="Game"
      style={{ backgroundImage: "url(" + currentBackground.link + ")" }}
      onClick={() => {
        if (currentScene.buttons === undefined) {
          setSceneid(currentScene.goto);
        }
      }}
    >
      <img
        alt=""
        src={require("../../assets/characters/woman.png")}
        className="CharacterLeft"
      />
      {currentScene.character === "both" && (
        <img alt="" src={currentCharacter.link} className="CharacterRight" />
      )}
      <div
        className={
          currentScene.speechBubble === "left"
            ? "TextLeftContainer"
            : "TextRightContainer"
        }
      >
        <div
          className={
            currentScene.speechBubble === "left" ? "TextLeft" : "TextRight"
          }
        >
          {currentScene.text}
        </div>
        {currentScene.buttons !== undefined && (
          <div className="Points">{points}</div>
        )}
      </div>
      {showPopup && <div className="Popup">Вы получаете 1 балл за ответ!</div>}
      {showNo && <div className="No">я НЕ БУДУ делать ЭТО без очков</div>}
      <div className="ButtonContainer">
        {currentScene.buttons !== undefined &&
          currentScene.buttons.map((button) => (
            <div
              key={button.text}
              className="Button"
              onClick={() => {
                if (button.point !== undefined) {
                  setPoints(points + button.point);
                  setShowPopup(true);
                  setTimeout(() => {
                    setShowPopup(false);
                  }, 2000);
                  setSceneid(button.goto);
                } else if (button.price !== undefined) {
                  if (points >= button.price) {
                    setPoints(points - button.price);
                    setSceneid(button.goto);
                  } else {
                    setShowNo(true);
                    setTimeout(() => {
                      setShowNo(false);
                    }, 1200);
                  }
                } else {
                  setSceneid(button.goto);
                }
              }}
            >
              {button.text}
              {button.price !== undefined && (
                <div className="Price">{button.price}</div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Game;
