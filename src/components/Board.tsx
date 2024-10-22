import React from 'react';
import Square from './Square';
import { useSelector, useDispatch } from 'react-redux';
import { makeMove } from '../redux/gameSlice';
import { RootState } from '../redux/store';

interface BoardProps {
  currentPlayer: '1' | '2';
}

const Board: React.FC<BoardProps> = ({ currentPlayer }) => {
  const board = useSelector((state: RootState) => state.game.board);
  const isXNext = useSelector((state: RootState) => state.game.isXNext);
  const isGameOver = useSelector((state: RootState) => state.game.isGameOver);
  const winningLine = useSelector((state: RootState) => state.game.winningLine);
  const dispatch = useDispatch();

  const handleClick = (index: number) => {
    if (isGameOver || board[index]) return;
    const playerSymbol = currentPlayer === '1' ? 'X' : 'O';
    const isPlayerTurn = (isXNext && playerSymbol === 'X') || (!isXNext && playerSymbol === 'O');
    if (isPlayerTurn) {
      dispatch(makeMove(index));
    }
  };

  return (
    <div className="board">
      {winningLine && <div className={`winning-line line-${winningLine.join('')}`}></div>}
      {board.map((value, index) => (
        <Square
          key={index}
          value={value}
          onClick={() => handleClick(index)}
          isDisabled={isGameOver || !!value}
          highlight={winningLine?.includes(index)}
        />
      ))}
    </div>
  );
};

export default Board;
