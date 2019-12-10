import React, { Component } from 'react'

class MemorySquare extends Component {

  state = {
    color: this.props.squareColor,
    clicked: false,
    position: this.props.position
  }

  render() {
    const styles = {
      coloredSquare: {
        // marginLeft: "auto",
        // marginRight: "auto",
        marginTop: "7.5px",
        height: "180px",
        width: "180px",
        background: this.state.color,
        borderRadius: "10px",
      },
      container: {
        // // margin: "10px",
        // textAlign: "center",
        // height: "195px",
        // width: "195px",
        // border: `solid 1px ${this.state.color}`,
        // borderRadius: "10px"
      }
     
    }
    return (
      <div style={styles.container}>
       <div style={styles.coloredSquare}></div>
      </div>
    )
  }
}



export default MemorySquare;
