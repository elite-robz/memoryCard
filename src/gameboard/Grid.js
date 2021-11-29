import GridCard from "./GridCard";
import characters from "./characterArray";
import { useEffect, useState } from "react";
import shuffleArray from "shuffle-array";

const Grid = ({
  check,
  highscore,
  currentScore,
  setCurrentScore,
  setHighscore,
}) => {
  const [currentChars, setCurrentChars] = useState([]);
  const [counter, setCounter] = useState(1);

  function myRandomInts(quantity, max) {
    const arr = [];
    while (arr.length < quantity) {
      let candidateInt = Math.floor(Math.random() * max) + 1;
      if (arr.indexOf(candidateInt) === -1) arr.push(candidateInt);
    }
    return arr;
  }

  useEffect(() => {
    let arr = [];
    const set = myRandomInts(4, characters.length - 1);
    console.log(set);
    set.map((el) =>
      arr.push({
        name: characters[el],
        clicked: false,
        src: `../assets/${characters[el]}.png`,
      })
    );

    //shuffleArray(arr);
    setCurrentChars(arr);
    setCurrentScore(0);
    setCounter(1);
  }, [check, setCurrentScore]);

  const handleClick = (character) => {
    let newChar = character;
    if (!newChar.clicked && counter < currentChars.length) {
      let newArr = currentChars.filter((el) => el.name !== character.name);
      newChar.clicked = true;
      newArr.push(newChar);
      shuffleArray(newArr);
      setCurrentChars(newArr);
      let newCount = counter + 1;
      setCounter(newCount);
      setCurrentScore(currentScore + 1);
    } else if (newChar.clicked) {
      setCurrentChars([{ name: "You Lost", clicked: false }]);
      if (currentScore >= highscore) {
        setHighscore(currentScore);
      }
    } else if (counter >= currentChars.length) {
      setCounter(1);
      let arr = [];
      const set = myRandomInts(counter + 2, characters.length - 1);
      set.map((el) =>
        arr.push({
          name: characters[el],
          clicked: false,
          src: `../assets/${characters[el]}.png`,
        })
      );
      setCurrentScore(currentScore + 1);
      shuffleArray(arr);
      setCurrentChars(arr);
    }
  };

  return (
    <div className="grid">
      {currentChars.map((character, index) => (
        <div
          className="invcard"
          key={index}
          onClick={() => {
            handleClick(character);
          }}
        >
          <GridCard character={character.name} src={character.src} />
        </div>
      ))}
    </div>
  );
};

export default Grid;
