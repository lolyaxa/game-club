import React from "react";
import "./menu.css";

function Menu(props) {
  return (
    <div className="Menu">
      <button onClick={props.onStartGameClick} className="MenuButton">
        Начать игру
      </button>
    </div>
  );
}
export default Menu;
