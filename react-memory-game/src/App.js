import React from 'react';
import Navbar from "./components/navbar";
import coreCSS from "../src/app.css";
import GameContainer from "./components/GameContainer";

function App() {
  return (
    <div style={coreCSS}>
      <Navbar />
      <GameContainer />
    </div>
  );
}




export default App;
