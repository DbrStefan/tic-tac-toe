import React from 'react';

interface SquareProps {
  value: 'X' | 'O' | null;
  onClick: () => void;
  isDisabled: boolean;
  highlight?: boolean;
}

const Square: React.FC<SquareProps> = ({ value, onClick, isDisabled, highlight }) => {
  return (
    <button
      className={`square ${highlight ? 'highlight' : ''}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {value}
    </button>
  );
};

export default Square;
