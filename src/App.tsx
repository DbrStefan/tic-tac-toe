import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetGame, resetAll } from './redux/gameSlice';
import { resetChat } from './redux/chatSlice';
import PlayerSide from './components/PlayerSide';
import { RootState } from './redux/store';

const App: React.FC = () => {
  const winner = useSelector((state: RootState) => state.game.winner);
  const xWins = useSelector((state: RootState) => state.game.xWins);
  const oWins = useSelector((state: RootState) => state.game.oWins);
  const dispatch = useDispatch();

  useEffect(() => {
    if (winner) {
      const timer = setTimeout(() => {
        dispatch(resetGame());
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [winner, dispatch]);

  const handleReset = () => {
    dispatch(resetAll());
    dispatch(resetChat());
  };

  return (
    <div className="app">
    <div className="header">
      <span>Score: {xWins}:{oWins}</span>
      <button className="reset-button" onClick={handleReset}>Reset</button>
    </div>
      <div className="game-container">
        <PlayerSide currentPlayer="1" />
        <PlayerSide currentPlayer="2" />
      </div>
    </div>
  );
};

export default App;
