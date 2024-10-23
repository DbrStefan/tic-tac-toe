import React from 'react';
import Board from './Board';
import Chat from './Chat';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

interface PlayerSideProps {
  currentPlayer: '1' | '2';
}

type GameStatus = {
  message: string;
  className: string;
}

const PlayerSide: React.FC<PlayerSideProps> = ({ currentPlayer }) => {
  const board = useSelector((state: RootState) => state.game.board);
  const isXNext = useSelector((state: RootState) => state.game.isXNext);
  const isGameOver = useSelector((state: RootState) => state.game.isGameOver);
  const winner = useSelector((state: RootState) => state.game.winner);

  const getGameOverStatus = (): GameStatus => {
    if (winner === 'Draw') {
      return { message: "It's a Draw!", className: 'draw' };
    } else if (winner === currentPlayer) {
      return { message: 'You Win!', className: 'win' };
    } else {
      return { message: 'You Lost!', className: 'lost' };
    }
  };

  const getInGameStatus = (): GameStatus => {
    const playerSymbol = currentPlayer === '1' ? 'X' : 'O';
    const isPlayerTurn = (isXNext && playerSymbol === 'X') || (!isXNext && playerSymbol === 'O');
    const isBoardEmpty = board.every((cell) => cell === null);
    
    if (isBoardEmpty) {
      return {
        message: isPlayerTurn ? 'Game Started! Your turn:' : 'Game Started! Wait for your opponent.',
        className: ''
      };
    } else {
      return {
        message: isPlayerTurn ? 'Your turn:' : 'Wait for your opponent.',
        className: ''
      };
    }
  };

  const { message, className } = isGameOver ? getGameOverStatus() : getInGameStatus();

  return (
    <div className={`player-side ${className}`}>
      <h2>Player {currentPlayer}</h2>
      <div className="status">{message}</div>
      <Board currentPlayer={currentPlayer} />
      <Chat currentPlayer={currentPlayer} />
    </div>
  );
};

export default PlayerSide;