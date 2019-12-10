import React, { Component } from 'react';
import MemorySquare from "./MemorySquare";
import css from "../GameContainer.css"
class GameContainer extends Component {
  evaluatePosition = () => {
    return Math.floor(Math.random() * 800);
  }

  state = {
    squares: [
      {hex: "#D3D3D3", position: this.evaluatePosition()},
      {hex: "#D0D0D0", position: this.evaluatePosition()},
      {hex: "#C8C8C8", position: this.evaluatePosition()},
      {hex: "#C0C0C0", position: this.evaluatePosition()},
      {hex: "#BEBEBE", position: this.evaluatePosition()},
      {hex: "#B8B8B8", position: this.evaluatePosition()},
      {hex: "#B0B0B0", position: this.evaluatePosition()},
      {hex: "#A9A9A9", position: this.evaluatePosition()},
      {hex: "#A8A8A8", position: this.evaluatePosition()},
      {hex: "#A0A0A0", position: this.evaluatePosition()},
      {hex: "#989898", position: this.evaluatePosition()},
      {hex: "#909090", position: this.evaluatePosition()},
    ]
  }

  render() {
    return (
      <div className="container">
        {this.state.squares.sort((a, b) => {return a.position - b.position}).map((square, index) => (
          <MemorySquare key={index} position={square.position} squareColor={square.hex}/>
        ))}
        {/* {this.state.squares.sort((a,b) => {return a > b}))
        .map((square, index) => (
          <MemorySquare key={index} position={square.position} squareColor={square.hex}/>
        ))}; */}
      </div>
    )
  }
};



export default GameContainer;
