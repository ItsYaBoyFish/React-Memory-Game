import React, { Component } from 'react';
import MemorySquare from "./MemorySquare";

export class GameContainer extends Component {
  render() {
    return (
      <div>
        <MemorySquare />
        <MemorySquare />
        <MemorySquare />
        <MemorySquare />

      </div>
    )
  }
};

export default GameContainer;
