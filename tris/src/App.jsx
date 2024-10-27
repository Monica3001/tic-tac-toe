import { useState } from 'react'
import './App.css'
import { calculateWinner } from './calculateWinner';


const initialBoard = Array(9).fill(null);

function App() {
  const [board, setBoard] = useState(initialBoard);
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (index) => {
    if (calculateWinner(board) || board[index]) { //calculateWinner(board) is truthy or board index is not null
      return;
    }
    const newBoard = board.slice();
    newBoard[index] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const renderSquare = (index) => {
    return (
      <button className="square" onClick={() => handleClick(index)}>
        {board[index]}
      </button>
    );
  };

  const resetGame = () => {
    setBoard(initialBoard);
    setXIsNext(true);
  };

  const winner = calculateWinner(board);
  let status;
  if (winner) {
    status = `WINNER : ${winner}`;
  } else if (board.every((cell) => cell)) {
    status = 'DRAW!';
  } else {
    status = `Next player : ${xIsNext ? 'X' : 'O'}`;
  }

  return (
    <>
    <div className='gameSpace'>
 <div className="game">
      <div className="game-board">
        <div className="status">{status}</div>
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      <div className="game-info">
        <button onClick={resetGame}>Reset Game</button>
      </div>
    </div>
    </div>
    </>
  )
}

export default App
