import React from 'react';
import coreCSS from "../src/app.css";
import GameContainer from "./components/GameContainer"

function App() {
  return (
    <div style={coreCSS}>
      <GameContainer />
    </div>
  );
}

export default App;
