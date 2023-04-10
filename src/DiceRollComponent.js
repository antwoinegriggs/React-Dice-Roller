import { useState } from "react";
import { diceImages } from "./images/index.js";
import "./DiceRollStyle.css";

console.log(diceImages);

const DiceRollComponent = (props) => {
  // Handle state
  const [diceOne, setFaceOne] = useState(1); //default state is 1 to render first image from diceImages object
  const [diceTwo, setFaceTwo] = useState(1);

  //Sum of both dice roll
  const diceResult = diceOne + diceTwo;

  //Random dice roll between 1-6
  const rollDiceOne = () => parseInt(Math.floor(Math.random() * 6) + 1);
  const rollDiceTwo = () => parseInt(Math.floor(Math.random() * 6) + 1);

  //Set new state
  const diceRoll = () => {
    setFaceOne(rollDiceOne);
    setFaceTwo(rollDiceTwo);
  };

  return (
    <div id="dice-roller">
      <div id="image-container">
        {/* Uses roll value as an index for object key to its value for the image source*/}
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

export default DiceRollComponent;
