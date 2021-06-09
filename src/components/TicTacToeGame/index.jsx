import { Game, TicTacToe } from 'game-core';
import React, { useState } from "react";
import Field from "../Field";

const game = new Game({
  playersList: ['PlayerOne', 'PlayerTwo'],
  strategy: new TicTacToe(),
  fieldSize: { x: 3, y: 3 },
});

const boardZero = JSON.parse(JSON.stringify(game.field.board));

const initialStore = {
  board: boardZero,
  boardView: game.field.board.map(elem => elem.map(cell => cell = null)),
};

const TicTacToeGame = () => {
  const [board, setBoard] = useState(initialStore.board);
  const [boardView, setBoardView] = useState(initialStore.boardView);
  const isPlayerWin = game.gameInfo.strategy.checkWin(game.field.board);
  const winner = `Winner:  ${game.players[game.currentPlayerIndex].name}`;
  const nextPlayer = `Next Player:  ${game.players[game.currentPlayerIndex].name} : ${game.players[game.currentPlayerIndex].sign}`;
  const gameResult = isPlayerWin ? winner : 'Anyone wins';

  const handleClick = (coords) => {
if (!game.isFinished){
    const {x, y} = coords;
    const symbol = game.players[game.currentPlayerIndex].sign;
    game.makeMove(coords);
    const changedBoardView = JSON.parse(JSON.stringify(boardView));
    changedBoardView[x][y] = symbol; 
    setBoard(game.field.board);
    setBoardView(changedBoardView)
}
else {
alert(`Game finished, you can't move! Press 'restart' if You want to play`)
}              
  };

  const handleRestart = () => {
    game.clearBoard();
    setBoard(game.field.board);
    setBoardView(initialStore.boardView);
  }

  return (
    <>
      <h1>React GAME</h1>
      <Field board={boardView} onClick={handleClick}  />
      <div className="info-wrapper">
        <h3>{game.isFinished ? gameResult : nextPlayer}</h3>
      </div> 
      <button onClick={handleRestart}>Restart</button>
    </>
  );
};

export default TicTacToeGame;