import React from "react";

function Navbar() {
  return (
    <div style={navStyles.navbar}>
      {/* <div style={navStyles.brand}>
        <h1>Memory Game</h1>
      </div>
      <div className={navStyles.instructions}>
        <h1>Click A Image To Begin</h1>
      </div>
      <div className={navStyles.score}>
        <h3>Score: 1 || Top Score: 3</h3>
      </div> */}
    </div>
  )

  


}


const navStyles = {
  navbar: {
    background: "blue",
    display: "flex-container",
    flexDirection: "row",
    height: "70px",
    width: "100%",
    margin: 0,
    padding: 0
  },
  brand: {
    display: 'flex-container',
    color: "#fff",
    alignItems: "flex-start"
  },
  instructions: {
    color: "#fff",
    alignItems: "flex-center"
  },
  score: {
    color: "#fff",
    alignItems: "flex-end"
  }
}

export default Navbar;