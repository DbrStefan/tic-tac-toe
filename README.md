# Tic-Tac-Toe Game with Chat Feature

A web-based Tic-Tac-Toe game where two players can play simultaneously on the same screen. The game includes a chat feature, score tracking, and a visually appealing interface. Built using React, TypeScript, Redux Toolkit, Vite, and SASS.

## Table of Contents
- [Tic-Tac-Toe Game with Chat Feature](#tic-tac-toe-game-with-chat-feature)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Demo](#demo)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running the Application](#running-the-application)
  - [Project Structure](#project-structure)
  - [Technologies Used](#technologies-used)
  - [How to Play](#how-to-play)

## Features
- **Two-Player Gameplay**: The screen is divided into two sides for Player 1 and Player 2.
- **Real-Time Updates**: Game moves are reflected simultaneously on both sides.
- **Turn-Based Logic**: Only the player whose turn it is can make a move.
- **Chat Feature**: Players can chat with each other during the game.
  - Messages display timestamps.
  - Messages are styled similarly to Facebook Messenger, with own messages on the right.
- **Score Tracking**: The game keeps track of each player's wins.
- **Reset Functionality**: Any player can reset the game, which clears the board, score, and chat history.
- **Winning Highlight**: When a player wins, a line is drawn over the winning combination.
- **Responsive Design**: The interface adapts to various screen sizes for optimal user experience.
- **Visual Feedback**: Displays "You Win!" or "You Lost!" messages with appropriate styling.

## Demo
[Live Demo on GitHub Pages](https://github.com/<your-github-username>/tic-tac-toe)

*Please replace `<your-github-username>` with your actual GitHub username.*

## Getting Started
Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites
- Node.js (v12 or higher)
- npm or yarn

### Installation
1. **Clone the repository:**
```bash
git clone https://github.com/<your-github-username>/tic-tac-toe.git
cd tic-tac-toe
```

2. **Install dependencies:**
Using npm:
```bash
npm install
```
Or using yarn:
```bash
yarn install
```

### Running the Application
**Development Mode:**
Start the development server:
```bash
npm run dev
```
The application will open at `http://localhost:5173/` by default.

**Production Build:**
To build the app for production:
```bash
npm run build
```

Serve the production build locally to test:
```bash
npm run serve
```

## Project Structure
```
tic-tac-toe/
├── src/
│   ├── components/
│   │   ├── Board.tsx
│   │   ├── Chat.tsx
│   │   ├── PlayerSide.tsx
│   │   ├── Square.tsx
│   ├── redux/
│   │   ├── store.ts
│   │   ├── gameSlice.ts
│   │   └── chatSlice.ts
│   ├── styles/
│   │   ├── _variables.scss
│   │   └── main.scss
│   ├── App.tsx
│   └── main.tsx
├── public/
│   └── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Technologies Used
- **React**: Front-end library for building user interfaces.
- **TypeScript**: Adds static typing to JavaScript.
- **Redux Toolkit**: Simplifies Redux state management.
- **Vite**: Next-generation front-end tooling for development and build.
- **SASS/SCSS**: CSS preprocessor for styling.
- **HTML5 & CSS3**: Markup and styling.

## How to Play
1. **Start the Game:**
   - Upon loading, the game starts automatically.
   - The interface is split into two sides: Player 1 and Player 2.

2. **Making Moves:**
   - **Player 1** uses 'X' and starts the game.
   - Click on an empty square to make a move.
   - After your move, wait for your opponent to make their move.

3. **Chatting:**
   - Use the chat input at the bottom to send messages.
   - Messages include a timestamp and are displayed on both sides.
   - Your messages appear on the right, and your opponent's messages appear on the left.

4. **Winning the Game:**
   - Get three of your symbols in a row (horizontally, vertically, or diagonally) to win.
   - When you win, a line will appear over the winning combination.
   - A message will display "You Win!" or "You Lost!" accordingly.

5. **Score Tracking:**
   - The score is displayed at the top, showing wins for each player.
   - Scores persist until the game is reset.

6. **Resetting the Game:**
   - Click the "Reset Game" button to clear the board, scores, and chat history.
   - The game will restart, and Player 1 will start the new game.
