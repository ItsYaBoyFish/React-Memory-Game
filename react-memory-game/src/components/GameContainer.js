import React, { Component } from 'react';
import MemorySquare from "./MemorySquare";
import StatusPanel from "./StatusPanel"
import css from "../GameContainer.css"
class GameContainer extends Component {
  // Generates a random number for each
  evaluatePosition = () => {
    return Math.floor(Math.random() * 800);
  }

  resetGame = (squaresArr) => {
    window.location.reload(false)
    squaresArr.map(square => {
      return square.position = this.evaluatePosition();
    })
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
    topScore: parseInt(sessionStorage.getItem('topScore')) || 0
  }

  squareClicked = (id) => {
    const squares = this.state.squares
    var score = this.state.score
    var topScore = this.state.topScore
    // console.log(squares)
    if (squares[id].clicked === true) {
      
      alert(`Game Over: You Guessed Incorrectly!`)

      // setting the TopScore value to sessionStorage
      sessionStorage.setItem('topScore', this.state.topScore)

      // Resetting all clicked values to false.
      this.resetGame()

    } else {
      // Set that squares clicked state to true.
      squares[id].clicked = true

      // Increment the score by 1
      score = score + 1

      // If the score is greater than or equal to score set topScore equal to score.
      if (score >= topScore) {
        topScore = score
      }
      // Updating the position of the squares to rearange the tiles.
      squares.map((square => {
        return square.position = this.evaluatePosition();
        })).sort(((a,b) => {return a.position - b.position}))

        // Setting the updated squares array back to state, along with the score and message.
      this.setState({
        squares,
        score,
        topScore: topScore
      })
    }
  }

  render() {
    return (
      <div style={css} className="container">
        <StatusPanel score={this.state.score} topScore={this.state.topScore}/>
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
