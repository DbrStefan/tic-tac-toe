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
    const statusMap: Record<string, GameStatus> = {
      Draw: { message: "It's a Draw!", className: 'draw' },
      [currentPlayer]: { message: 'You Win!', className: 'win' },
      default: { message: 'You Lost!', className: 'lost' }
    };

    return statusMap[winner] || statusMap.default;
  };

  const getInGameStatus = (): GameStatus => {
    const playerSymbol = currentPlayer === '1' ? 'X' : 'O';
    const isPlayerTurn = (isXNext && playerSymbol === 'X') || (!isXNext && playerSymbol === 'O');
    const isBoardEmpty = board.every((cell) => cell === null);
    
    const statusMap = {
      empty: {
        true: 'Game Started! Your turn:',
        false: 'Game Started! Wait for your opponent.'
      },
      inProgress: {
        true: 'Your turn:',
        false: 'Wait for your opponent.'
      }
    };

    const gameState = isBoardEmpty ? 'empty' : 'inProgress';
    const message = statusMap[gameState][isPlayerTurn];

    return { message, className: '' };
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