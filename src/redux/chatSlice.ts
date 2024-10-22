import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Message {
  sender: '1' | '2';
  text: string;
  timestamp: string;
}

interface ChatState {
  messages: Message[];
}

const initialState: ChatState = {
  messages: [],
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<Message>) => {
      state.messages.push(action.payload);
    },
    resetChat: (state) => {
      state.messages = [];
    },
  },
});

export const { addMessage, resetChat } = chatSlice.actions;
export default chatSlice.reducer;
