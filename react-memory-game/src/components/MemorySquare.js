import React, { Component } from 'react'

export class MemorySquare extends Component {
  render() {
    return (
      <div style={styles.container}>
      <div style={styles.coloredSquare}></div>
      </div>
    )
  }
}

const styles = {
  coloredSquare: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "7.5px",
    height: "180px",
    width: "180px",
    background: "lightgrey",
    borderRadius: "10px",
  },
  container: {
    margin: "10px",
    textAlign: "center",
    height: "195px",
    width: "195px",
    border: "solid 1px grey",
    borderRadius: "10px"
  }
 
}

export default MemorySquare;
