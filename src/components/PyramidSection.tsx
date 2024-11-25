import React from 'react';
import { Lock, X } from 'lucide-react';
import PyramidLevel from './PyramidLevel';

interface PyramidSectionProps {
  hint: string;
  answer: string;
  image: string;
  difficulty: string;
  isActive: boolean;
  isCompleted: boolean;
  isExpanded: boolean;
  onExpand: () => void;
  onCollapse: () => void;
  onCorrect: () => void;
}

export default function PyramidSection({
  hint,
  answer,
  image,
  difficulty,
  isActive,
  isCompleted,
  isExpanded,
  onExpand,
  onCollapse,
  onCorrect
}: PyramidSectionProps) {
  return (
    <>
      {/* Compact Section in Pyramid */}
      <div
        onClick={isActive && !isCompleted ? onExpand : undefined}
        className={`w-full h-full rounded-lg overflow-hidden transition-all duration-300
                   ${isActive ? 'hover:brightness-110 cursor-pointer' : 'cursor-not-allowed brightness-50'}
                   ${isCompleted ? 'cursor-default' : ''}`}
      >
        {isCompleted ? (
          <img src={image} alt="Completed" className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-white/10 backdrop-blur">
            {!isActive ? (
              <Lock className="w-8 h-8 text-white/50" />
            ) : (
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {difficulty}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Expanded Pop-up */}
      {isExpanded && (
        <div 
          className="fixed inset-0 z-[9999] bg-black/75 backdrop-blur-sm 
                     flex items-center justify-center animate-fade-in"
          onClick={(e) => {
            if (e.target === e.currentTarget) onCollapse();
          }}
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl 
                         shadow-2xl max-w-2xl w-[95%] mx-4 relative border border-white/10
                         transform transition-all duration-300 scale-100 opacity-100">
            <button
              onClick={onCollapse}
              className="absolute -top-3 -right-3 bg-white/10 hover:bg-white/20 
                       backdrop-blur-sm p-2.5 rounded-lg text-white/70 hover:text-white 
                       transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <X size={20} />
            </button>
            
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">
                {difficulty} Challenge
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
            </div>

            <PyramidLevel
              hint={hint}
              answer={answer}
              image={image}
              difficulty={difficulty}
              onCorrect={() => {
                onCorrect();
                onCollapse();
              }}
              isDisabled={false}
            />
          </div>
        </div>
      )}
    </>
  );
}