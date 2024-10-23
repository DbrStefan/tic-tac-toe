import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addMessage } from '../redux/chatSlice';
import { RootState } from '../redux/store';
import { SendHorizontal, Circle, X } from 'lucide-react';

interface ChatProps {
  currentPlayer: '1' | '2';
}

const Chat: React.FC<ChatProps> = ({ currentPlayer }) => {
  const messages = useSelector((state: RootState) => state.chat.messages);
  const dispatch = useDispatch();
  const [messageText, setMessageText] = useState('');

  const handleSendMessage = () => {
    if (messageText.trim() !== '') {
      const timestamp = new Date().toLocaleTimeString([], { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false 
      });
      dispatch(addMessage({ sender: currentPlayer, text: messageText, timestamp }));
      setMessageText('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const PlayerIcon = ({ player }: { player: '1' | '2' }) => {
    return player === '1' ? (
      <X className="player-icon" size={16} />
    ) : (
      <Circle className="player-icon" size={16} />
    );
  };

  return (
    <div className="chat">
      <div className="chat-header">
        <PlayerIcon player={currentPlayer} />
        <span>Player {currentPlayer}</span>
      </div>
      <div className="chat-messages">
        {messages.map((msg, index) => {
          const isOwnMessage = msg.sender === currentPlayer;
          return (
            <div
              key={index}
              className={`message ${isOwnMessage ? 'message-right' : 'message-left'}`}
            >
              <div className="message-content">
                <div className="message-text">{msg.text}</div>
                <div className="message-timestamp">{msg.timestamp}</div>
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
          onKeyPress={handleKeyPress}
          placeholder="Message"
        />
        <button 
          onClick={handleSendMessage}
          className="send-button"
          disabled={messageText.trim() === ''}
        >
          <SendHorizontal size={20} />
        </button>
      </div>
    </div>
  );
};

export default Chat;