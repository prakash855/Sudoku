import React from "react";

import DifficultySelector from "../Components/DifficultySelector";
function Home() {
  return (
    <div className="outer-container">
      <div className="app-container">
        <h1 className="title-name">Play Sudoku Online</h1>
        <DifficultySelector />
      </div>
    </div>
  );
}

export default Home;
