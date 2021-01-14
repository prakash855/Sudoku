import React, { useState } from "react";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Board from "./Board";

function DifficultySelector() {
  // Select the difficulty Level
  const [difficulty, setDifficulty] = useState("easy");

  const difficultyHandler = (event, newDifficulty) => {
    if (newDifficulty !== null) {
      setDifficulty(newDifficulty);
    }
  };
  return (
    <div>
      <ToggleButtonGroup
        exclusive
        value={difficulty}
        onChange={difficultyHandler}
        size="large"
      >
        <ToggleButton value="easy" color="primary">
          Easy
        </ToggleButton>
        <ToggleButton value="medium" color="primary">
          Medium
        </ToggleButton>
        <ToggleButton value="hard" color="primary">
          Hard
        </ToggleButton>
      </ToggleButtonGroup>
      <div className="play-button-area">
        <Link to="/signin" style={{ textDecoration: "none" }}>
          <Button variant="contained" size="large">
            Login to Play
          </Button>
        </Link>
      </div>
      <div className="instructions">
        <h3>How to play Sudoku</h3>
        <p>
          The goal of Sudoku is to fill in a 9×9 grid with digits so that each
          column, row, and 3×3 section contain the numbers between 1 to 9. At
          the beginning of the game, the 9×9 grid will have some of the squares
          filled in. Your job is to use logic to fill in the missing digits and
          complete the grid.
          <br /> Don’t forget, a move is incorrect if:
        </p>
        <div className="instructions-inner">
          <ul>
            <li>
              Any row contains more than one of the same number from 1 to 9
            </li>
            <li>
              Any column contains more than one of the same number from 1 to 9
            </li>
            <li>
              Any 3×3 grid contains more than one of the same number from 1 to 9
            </li>
          </ul>
        </div>
      </div>
      <Board />
    </div>
  );
}

export default DifficultySelector;
