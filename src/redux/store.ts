import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './gameSlice';
import chatReducer from './chatSlice';

const store = configureStore({
  reducer: {
    game: gameReducer,
    chat: chatReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
