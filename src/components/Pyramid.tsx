import React, { useState } from 'react';
import PyramidSection from './PyramidSection';
import { Trophy } from 'lucide-react';

interface PyramidProps {
  levels: Array<{
    hint: string;
    answer: string;
    image: string;
    difficulty: string;
  }>;
  currentLevel: number;
  score: number;
  onCorrect: () => void;
  onReset: () => void;
  isComplete: boolean;
}

export default function Pyramid({
  levels,
  currentLevel,
  score,
  onCorrect,
  onReset,
  isComplete,
}: PyramidProps) {
  const [expandedLevel, setExpandedLevel] = useState<number | null>(null);

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 py-8">
      {/* Score and Reset */}
      <div className="absolute top-4 right-4 z-10 flex items-center gap-4">
        <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
          <Trophy className="text-yellow-500" />
          <span className="font-bold text-gray-800">{score}</span>
        </div>
        <button
          onClick={onReset}
          className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg 
                   hover:bg-white transition-colors text-gray-800 font-medium"
        >
          Reset Game
        </button>
      </div>

      {/* Pyramid Structure */}
      <div className={`pyramid-container ${isComplete ? 'victory' : ''}`}>
        {/* Hard Level - Top */}
        <div className="pyramid-level top">
          <div
            className={`pyramid-section ${currentLevel >= 2 ? 'active' : ''} 
                        ${isComplete || currentLevel > 2 ? 'completed' : ''}`}
          >
            <PyramidSection
              {...levels[2]}
              isActive={currentLevel === 2}
              isCompleted={currentLevel > 2}
              isExpanded={expandedLevel === 2}
              onExpand={() => setExpandedLevel(2)}
              onCollapse={() => setExpandedLevel(null)}
              onCorrect={() => {
                onCorrect();
                setExpandedLevel(null); // Fechar após correção
              }}
            />
          </div>
        </div>

        {/* Medium Level - Middle */}
        <div className="pyramid-level middle">
          <div
            className={`pyramid-section ${currentLevel >= 1 ? 'active' : ''} 
                        ${currentLevel > 1 ? 'completed' : ''}`}
          >
            <PyramidSection
              {...levels[1]}
              isActive={currentLevel === 1}
              isCompleted={currentLevel > 1}
              isExpanded={expandedLevel === 1}
              onExpand={() => setExpandedLevel(1)}
              onCollapse={() => setExpandedLevel(null)}
              onCorrect={() => {
                onCorrect();
                setExpandedLevel(null); // Fechar após correção
              }}
            />
          </div>
        </div>

        {/* Easy Level - Bottom */}
        <div className="pyramid-level bottom">
          <div
            className={`pyramid-section ${currentLevel >= 0 ? 'active' : ''} 
                        ${currentLevel > 0 ? 'completed' : ''}`}
          >
            <PyramidSection
              {...levels[0]}
              isActive={currentLevel === 0}
              isCompleted={currentLevel > 0}
              isExpanded={expandedLevel === 0}
              onExpand={() => setExpandedLevel(0)}
              onCollapse={() => setExpandedLevel(null)}
              onCorrect={() => {
                onCorrect();
                setExpandedLevel(null); // Fechar após correção
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}