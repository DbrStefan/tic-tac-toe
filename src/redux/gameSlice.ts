import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Player = '1' | '2';
type Symbol = 'X' | 'O';
type BoardState = (Symbol | null)[];

interface GameState {
  board: BoardState;
  isXNext: boolean;
  winner: Player | 'Draw' | null;
  isGameOver: boolean;
  xWins: number;
  oWins: number;
  winningLine: number[] | null;
}

const initialState: GameState = {
  board: Array(9).fill(null),
  isXNext: true,
  winner: null,
  isGameOver: false,
  xWins: 0,
  oWins: 0,
  winningLine: null,
};

const calculateWinner = (
  board: BoardState
): { winner: Symbol | 'Draw' | null; line: number[] | null } => {
  const lines = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8], 
    [2, 4, 6], 
  ];

  for (const line of lines) {
    const [a, b, c] = line;
    if (
      board[a] &&
      board[a] === board[b] &&
      board[a] === board[c]
    ) {
      return { winner: board[a], line };
    }
  }

  if (!board.includes(null)) {
    return { winner: 'Draw', line: null };
  }

  return { winner: null, line: null };
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    makeMove: (state, action: PayloadAction<number>) => {
      const index = action.payload;

      if (!state.board[index] && !state.isGameOver) {
        const currentSymbol: Symbol = state.isXNext ? 'X' : 'O';
        state.board[index] = currentSymbol;

        const result = calculateWinner(state.board);

        if (result.winner) {
          state.isGameOver = true;
          state.winner =
            result.winner === 'X'
              ? '1'
              : result.winner === 'O'
              ? '2'
              : 'Draw';
          state.winningLine = result.line;

          if (result.winner === 'X') {
            state.xWins += 1;
          } else if (result.winner === 'O') {
            state.oWins += 1;
          }
        } else {
          state.isXNext = !state.isXNext;
        }
      }
    },
    resetGame: (state) => {
      state.board = Array(9).fill(null);
      state.isXNext = true;
      state.winner = null;
      state.isGameOver = false;
      state.winningLine = null;
    },
    resetAll: (state) => {
      state.board = Array(9).fill(null);
      state.isXNext = true;
      state.winner = null;
      state.isGameOver = false;
      state.xWins = 0;
      state.oWins = 0;
      state.winningLine = null;
    },
  },
});

export const { makeMove, resetGame, resetAll } = gameSlice.actions;
export default gameSlice.reducer;
