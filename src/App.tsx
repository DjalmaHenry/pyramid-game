import React, { useState } from 'react';
import Pyramid from './components/Pyramid';
import Confetti from 'react-confetti';

const LEVELS = [
  {
    hint: "This animal says 'Moo.' It gives us milk to drink.",
    answer: "cow",
    image: "/images/cow.png",
    difficulty: "Easy"
  },
  {
    hint: "This animal says 'Baa.' It has fluffy white wool.",
    answer: "sheep",
    image: "/images/sheep.png",
    difficulty: "Medium"
  },
  {
    hint: "This animal says 'Oink.' It loves to roll in the mud.",
    answer: "pig",
    image: "/images/pig.png",
    difficulty: "Hard"
  }
];

function App() {
  const [score, setScore] = useState(0);
  const [currentLevel, setCurrentLevel] = useState(0);

  const handleCorrect = () => {
    setScore((prev) => prev + 100);
    setCurrentLevel((prev) => prev + 1);
  };

  const resetGame = () => {
    setScore(0);
    setCurrentLevel(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 py-8 relative">
      <h1 className="text-4xl font-bold text-white mb-12 text-center">The Pyramid Game</h1>

      <Pyramid
        levels={LEVELS}
        currentLevel={currentLevel}
        score={score}
        onCorrect={handleCorrect}
        onReset={resetGame}
        isComplete={currentLevel === LEVELS.length}
      />

      {/* Confetti Animation */}
      {currentLevel === LEVELS.length && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={150}
          gravity={0.3}
        />
      )}
    </div>
  );
}

export default App;