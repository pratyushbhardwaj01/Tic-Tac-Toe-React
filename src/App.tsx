import React from "react";

import "./App.css";
import Game from "./components/Game/Game";

const App = (): JSX.Element => {
  return (
    <div className="appWrapper">
      <Game />
    </div>
  );
};

export default App;
