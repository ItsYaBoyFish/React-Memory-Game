import React, { Component } from 'react';
import MemorySquare from "./MemorySquare";
import css from "../GameContainer.css"
class GameContainer extends Component {
  evaluatePosition = () => {
    return Math.floor(Math.random() * 800);
  }

  state = {
    squares: [
      {id: 0, hex: "#D3D3D3", position: this.evaluatePosition(), clicked: false},
      {id: 1, hex: "#D0D0D0", position: this.evaluatePosition(), clicked: false},
      {id: 2, hex: "#C8C8C8", position: this.evaluatePosition(), clicked: false},
      {id: 3, hex: "#C0C0C0", position: this.evaluatePosition(), clicked: false},
      {id: 4, hex: "#BEBEBE", position: this.evaluatePosition(), clicked: false},
      {id: 5, hex: "#B8B8B8", position: this.evaluatePosition(), clicked: false},
      {id: 6, hex: "#B0B0B0", position: this.evaluatePosition(), clicked: false},
      {id: 7, hex: "#A9A9A9", position: this.evaluatePosition(), clicked: false},
      {id: 8, hex: "#A8A8A8", position: this.evaluatePosition(), clicked: false},
      {id: 9, hex: "#A0A0A0", position: this.evaluatePosition(), clicked: false},
      {id: 10, hex: "#989898", position: this.evaluatePosition(), clicked: false},
      {id: 11, hex: "#909090", position: this.evaluatePosition(), clicked: false}
    ]
  }

  squareClicked = (id) => {
    const squares = this.state.squares
    // console.log(squares)
   squares[id].clicked = true
    this.setState({
      squares
    })
  }

  render() {
    return (
      <div sytle={css} className="container">
        {this.state.squares.sort((a, b) => {return a.position - b.position}).map((square, index) => (
          <MemorySquare key={index} id={square.id} squareClicked={this.squareClicked} position={square.position} squareColor={square.hex}/>
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
