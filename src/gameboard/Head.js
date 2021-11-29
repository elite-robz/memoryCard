const Head = (props) => {
  const highscore = props.highscore || 0;
  const currentScore = props.currentScore || 0;
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h3>TFT Memory Game</h3>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h5 style={{ marginRight: 20 }}>High Score: {highscore}</h5>
        <h5 style={{ marginRight: 20 }}>Current Score: {currentScore}</h5>
        <button
          className="btn"
          style={{ margin: 10 }}
          onClick={() => {
            props.handleButton();
          }}
        >
          Restart
        </button>
      </div>
    </div>
  );
};

export default Head;
