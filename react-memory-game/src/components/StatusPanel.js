import React from 'react'

function StatusPanel(props) {
  return (
    <div style={styles.container}>
        <h1 style={{color: "#fff", textAlign: "center", marginTop: "7px"}}>Stats Panel:</h1>
        <hr style={{color: "#fff", marginTop: "3px"}}></hr>
        <h3 style={styles.h3}>Score: {props.score}</h3>
        <h3 style={styles.h3}>Top Score: {props.topScore}</h3>
        <hr style={{color: "#fff", marginTop: "10px"}}></hr>
        <div style={styles.instructions}>
          <label style={{fontSize: '25px', color: "#fff", fontWeight: 'bold'}}>Instructions:</label>
          <p style={{fontSize: "18px", color: '#e3f6f5', marginTop: '10px'}}>
            Click on the colored squares but don't forget which ones you have selected. You receive points for clicking on boxes that you have not previously clicked on already!
          </p>
        </div>
        <hr style={{color: "#fff", marginTop: "12px"}}></hr>
        {/* <div style={{marginLeft: "10px", marginTop: "10px"}}>
          <label style={{fontSize: '25px', color: "#fff", fontWeight: 'bold'}}>Difficulty: </label>
          <select id="difficulty" value={props.difficulty} onChange={() => {props.changeDifficulty()}} style={{marginLeft: '120px', width: "75px", height: '30px', fontSize: "18px"}}>
            <option value="Easy">Easy</option>
            <option value="Hard">Hard</option>
          </select>
        </div> */}
    </div>
    
  )
}

  const styles = {
    container: {
      background: "#393e46",
      height: "350px",
      width: "350px",
      borderRadius: "10px",
      marginRight: "10px",
      marginTop: '7.5px'
    },
    h3: {
      color: "#fff",
      marginTop: "10px",
      marginLeft: '10px',
      fontSize: "25px"
    },
    instructions: {
      marginTop: '10px',
      marginLeft: '10px'
    },
    message: {
      marginTop: "10px"
    }
  }

export default StatusPanel;