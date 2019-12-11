import React, { Component } from 'react';
import MemorySquare from "./MemorySquare";
import StatusPanel from "./StatusPanel"
import css from "../GameContainer.css"
class GameContainer extends Component {
  evaluatePosition = () => {
    return Math.floor(Math.random() * 800);
  }

  state = {
    squares: [
      {id: 0, hex: "red", position: this.evaluatePosition(), clicked: false},
      {id: 1, hex: "green", position: this.evaluatePosition(), clicked: false},
      {id: 2, hex: "yellow", position: this.evaluatePosition(), clicked: false},
      {id: 3, hex: "orange", position: this.evaluatePosition(), clicked: false},
      {id: 4, hex: "blue", position: this.evaluatePosition(), clicked: false},
      {id: 5, hex: "#B8B8B8", position: this.evaluatePosition(), clicked: false},
      {id: 6, hex: "#B0B0B0", position: this.evaluatePosition(), clicked: false},
      {id: 7, hex: "#A9A9A9", position: this.evaluatePosition(), clicked: false},
      {id: 8, hex: "#A8A8A8", position: this.evaluatePosition(), clicked: false},
      {id: 9, hex: "#A0A0A0", position: this.evaluatePosition(), clicked: false},
      {id: 10, hex: "#989898", position: this.evaluatePosition(), clicked: false},
      {id: 11, hex: "#909090", position: this.evaluatePosition(), clicked: false}
    ],
    score: 0,
    topScore: 0,
    message: ""
  }

  squareClicked = (id) => {
    const squares = this.state.squares
    var score = this.state.score
    // console.log(squares)
    if (squares[id].clicked === true) {
      alert('Game Over!')
      score = 0
      squares[id].clicked = false
      this.setState({
        score: score,
        squares: squares,
        message: "You Guessed Incorrectly"
      })
    } else {
      squares[id].clicked = true
      score = score + 1
      squares.map((square => {
        return square.position = Math.floor(Math.random() * 800);
        })).sort(((a,b) => {return a.position - b.position}))
      this.setState({
        squares,
        score,
        message: "You Guessed Correctly"
      })
    }
  }

  render() {
    return (
      <div style={css} className="container">
        <StatusPanel/>
        <div className="squareContainer">
          {this.state.squares.sort((a, b) => {return a.position - b.position}).map((square, index) => (
            <MemorySquare key={index} id={index} squareClicked={this.squareClicked} position={square.position} squareColor={square.hex}/>
          ))}
        </div>
      </div>
    )
  }
};



export default GameContainer;
