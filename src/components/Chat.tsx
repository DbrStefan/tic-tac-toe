import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addMessage } from '../redux/chatSlice';
import { RootState } from '../redux/store';

interface ChatProps {
  currentPlayer: '1' | '2';
}

const Chat: React.FC<ChatProps> = ({ currentPlayer }) => {
  const messages = useSelector((state: RootState) => state.chat.messages);
  const dispatch = useDispatch();
  const [messageText, setMessageText] = useState('');

  const handleSendMessage = () => {
    if (messageText.trim() !== '') {
      const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      dispatch(addMessage({ sender: currentPlayer, text: messageText, timestamp }));
      setMessageText('');
    }
  };

  return (
    <div className="chat">
      <div className="chat-messages">
        {messages.map((msg, index) => {
          const isOwnMessage = msg.sender === currentPlayer;
          return (
            <div
              key={index}
              className={`chat-message ${isOwnMessage ? 'own-message' : 'other-message'}`}
            >
              <div className="message-content">
                <strong>Player {msg.sender}:</strong> {msg.text}
                <span className="timestamp"> {msg.timestamp}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
