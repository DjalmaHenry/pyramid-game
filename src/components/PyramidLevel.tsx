import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

interface PyramidLevelProps {
  hint: string;
  answer: string;
  image: string;
  difficulty: string;
  onCorrect: () => void;
  isDisabled: boolean;
}

export default function PyramidLevel({ 
  hint, 
  answer, 
  image, 
  difficulty, 
  onCorrect, 
  isDisabled
}: PyramidLevelProps) {
  const [input, setInput] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.toLowerCase() === answer.toLowerCase()) {
      setIsCorrect(true);
      onCorrect();
    } else {
      setShowError(true);
      setTimeout(() => setShowError(false), 1000);
    }
  };

  return (
    <div className="space-y-6">
      {isCorrect ? (
        <div className="relative overflow-hidden rounded-xl aspect-video">
          <img
            src={image}
            alt="Success"
            className="w-full h-full object-cover animate-fade-in"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="flex items-center gap-2 mb-2">
              <Check className="text-emerald-400" size={24} />
              <h3 className="text-xl font-bold">Correct Answer!</h3>
            </div>
            <p className="text-white/80">The answer was: <span className="font-semibold">{answer}</span></p>
          </div>
        </div>
      ) : (
        <div className={`space-y-6 ${isDisabled ? 'opacity-50' : ''}`}>
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
            <p className="font-medium text-white text-lg leading-relaxed">{hint}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isDisabled}
                className="flex-1 px-4 py-3 bg-white/90 backdrop-blur-sm border-0 rounded-xl
                         focus:ring-2 focus:ring-blue-500 disabled:bg-white/50
                         placeholder-gray-500 text-gray-800 text-lg"
                placeholder="Enter your answer..."
              />
              <button
                type="submit"
                disabled={isDisabled || !input}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white 
                         rounded-xl hover:from-blue-600 hover:to-purple-600 
                         disabled:opacity-50 disabled:cursor-not-allowed transition-all
                         font-medium text-lg shadow-lg hover:shadow-xl
                         disabled:hover:from-blue-500 disabled:hover:to-purple-500"
              >
                Submit
              </button>
            </div>
            {showError && (
              <div className="flex items-center gap-2 text-red-400 animate-shake bg-red-500/10 
                           p-3 rounded-lg border border-red-500/20">
                <X size={18} />
                <span className="text-sm font-medium">Incorrect answer, try again!</span>
              </div>
            )}
          </form>
        </div>
      )}
    </div>
  );
}