import { useState } from "react";
import { diceImages } from "./images/index.js";
import "./DiceRollStyle.css";

console.log(diceImages);

const DiceState = (props) => {
  const [diceOne, setFaceOne] = useState(1);
  const [diceTwo, setFaceTwo] = useState(1);

  const diceResult = diceOne + diceTwo;

  const rollDiceOne = () => parseInt(Math.floor(Math.random() * 6) + 1);
  const rollDiceTwo = () => parseInt(Math.floor(Math.random() * 6) + 1);

  const diceRoll = () => {
    setFaceOne(rollDiceOne());
    setFaceTwo(rollDiceTwo);
  };

  return (
    <div id="dice-roller">
      <div id="image-container">
        <img src={Object.values(diceImages)[diceOne - 1]} alt="Dice Roll One" />
        <img src={Object.values(diceImages)[diceTwo - 1]} alt="Dice Roll Two" />
      </div>
      <h3 id="dice-result">You rolled a {diceResult} </h3>
      <button id="dice-button" onClick={diceRoll}>
        Roll The Dice
      </button>
    </div>
  );
};

export default DiceState;
