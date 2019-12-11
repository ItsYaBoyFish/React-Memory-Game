import React, { Component } from 'react'

class MemorySquare extends Component {

  state = {
    id: this.props.id
  }

  render() {
    const styles = {
      coloredSquare: {
        // marginLeft: "auto",
        // marginRight: "auto",
        marginTop: "7.5px",
        height: "180px",
        width: "180px",
        background: this.props.squareColor,
        borderRadius: "10px",
      },
      container: {
        // margin: "10px",
        textAlign: "center",
        height: "195px",
        width: "195px",
        borderRadius: "10px"
      }
     
    }
    return (
      <div  style={styles.container}>
        <div style={styles.coloredSquare} onClick={() => {this.props.squareClicked(this.props.id)}}></div>
      </div>
    )
  }
}



export default MemorySquare;
