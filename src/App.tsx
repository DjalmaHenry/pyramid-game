import React, { useState } from 'react';
import Pyramid from './components/Pyramid';

const LEVELS = [
  {
    hint: "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?",
    answer: "echo",
    image: "https://images.unsplash.com/photo-1499892477393-f675706cbe6e?auto=format&fit=crop&q=80&w=1000",
    difficulty: "Easy"
  },
  {
    hint: "The more you take, the more you leave behind. What am I?",
    answer: "footsteps",
    image: "https://images.unsplash.com/photo-1581889470536-467bdbe30cd0?auto=format&fit=crop&q=80&w=1000",
    difficulty: "Medium"
  },
  {
    hint: "I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. I have roads, but no cars. What am I?",
    answer: "map",
    image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000",
    difficulty: "Hard"
  }
];

function App() {
  const [score, setScore] = useState(0);
  const [currentLevel, setCurrentLevel] = useState(0);

  const handleCorrect = () => {
    setScore(prev => prev + 100);
    setCurrentLevel(prev => prev + 1);
  };

  const resetGame = () => {
    setScore(0);
    setCurrentLevel(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 py-8">
      <h1 className="text-4xl font-bold text-white mb-12 text-center">The Pyramid Game</h1>
      
      <Pyramid
        levels={LEVELS}
        currentLevel={currentLevel}
        score={score}
        onCorrect={handleCorrect}
        onReset={resetGame}
        isComplete={currentLevel === LEVELS.length}
      />

      {currentLevel === LEVELS.length && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl text-center max-w-md mx-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">🎉 Congratulations!</h2>
            <p className="text-gray-600 mb-6">You've mastered all levels with a score of {score}!</p>
            <button
              onClick={resetGame}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg 
                       hover:from-blue-600 hover:to-purple-600 transition-all"
            >
              Play Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;