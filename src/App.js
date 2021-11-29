import { useState } from "react";
import Grid from "./gameboard/Grid";
import Head from "./gameboard/Head";

function App() {
  const [check, setCheck] = useState(true);
  const [highscore, setHighscore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const handleButton = () => {
    if (check) {
      setCheck(false);
    } else {
      setCheck(true);
    }
  };
  return (
    <div className="App">
      <Head
        highscore={highscore}
        currentScore={currentScore}
        handleButton={handleButton}
      />
      <Grid
        highscore={highscore}
        currentScore={currentScore}
        setCurrentScore={setCurrentScore}
        setHighscore={setHighscore}
        check={check}
      />
    </div>
  );
}

export default App;
