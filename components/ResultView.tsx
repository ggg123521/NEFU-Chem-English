import React from 'react';
import { RefreshCcw, Trophy, AlertCircle, RotateCcw } from 'lucide-react';
import { Question } from '../types';

interface ResultViewProps {
  score: number;
  total: number;
  answers: { questionId: number; isCorrect: boolean; selectedId: string }[];
  questions: Question[];
  onRestart: () => void;
  onRetryWrong: () => void;
}

const ResultView: React.FC<ResultViewProps> = ({ score, total, answers, questions, onRestart, onRetryWrong }) => {
  const percentage = Math.round((score / total) * 100);
  const wrongCount = total - score;
  
  let message = "Keep practicing!";
  if (percentage >= 90) message = "Outstanding! Scientific excellence achieved.";
  else if (percentage >= 70) message = "Great job! You have a solid grasp of the material.";
  else if (percentage >= 50) message = "Good effort, but review the guidelines again.";

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <div className="bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden">
        <div className="bg-primary text-white p-10 text-center">
          <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Trophy className="w-12 h-12 text-yellow-400" />
          </div>
          <h2 className="text-3xl font-bold mb-2">Quiz Complete</h2>
          <p className="text-slate-300 mb-6">{message}</p>
          <div className="text-5xl font-bold mb-2">{score} / {total}</div>
          <div className="text-sm opacity-75">Total Score ({percentage}%)</div>
        </div>

        <div className="p-8">
          <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center">
            <AlertCircle className="w-5 h-5 mr-2 text-accent" /> Review Incorrect Answers
          </h3>
          
          <div className="space-y-6">
            {answers.map((ans, idx) => {
              if (ans.isCorrect) return null;
              const question = questions.find(q => q.id === ans.questionId);
              if (!question) return null;
              
              const selectedOption = question.options.find(o => o.id === ans.selectedId);
              const correctOption = question.options.find(o => o.isCorrect);

              return (
                <div key={idx} className="border-b border-gray-100 pb-6 last:border-0">
                  <div className="flex items-start mb-2">
                    <span className="text-xs font-bold text-red-500 bg-red-50 px-2 py-1 rounded mr-3 mt-1">
                      Q{idx + 1}
                    </span>
                    <div className="flex-1">
                      <p className="text-slate-800 font-medium">{question.question}</p>
                      {question.translation && (
                         <p className="text-slate-500 text-sm mt-1">{question.translation.question}</p>
                      )}
                    </div>
                  </div>
                  <div className="ml-10 text-sm space-y-2">
                    <p className="text-red-600 flex items-center">
                      <span className="w-4 inline-block font-bold">×</span> 
                      Your answer: {selectedOption?.text}
                    </p>
                    <p className="text-green-700 flex items-center font-medium">
                      <span className="w-4 inline-block font-bold">✓</span> 
                      Correct answer: {correctOption?.text}
                    </p>
                    {question.explanation && (
                       <div className="bg-gray-50 p-3 rounded mt-2 text-xs">
                         <p className="text-slate-600 italic mb-1">Note: {question.explanation}</p>
                         {question.translation?.explanation && (
                           <p className="text-indigo-800 italic">{question.translation.explanation}</p>
                         )}
                       </div>
                    )}
                  </div>
                </div>
              );
            })}
            
            {answers.every(a => a.isCorrect) && (
              <p className="text-center text-green-600 py-4">
                Perfect score! Nothing to review.
              </p>
            )}
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={onRestart}
              className="flex items-center justify-center px-8 py-3 bg-secondary text-white rounded-lg hover:bg-slate-900 transition-all font-semibold shadow-lg hover:shadow-xl"
            >
              <RefreshCcw className="w-5 h-5 mr-2" />
              Retake All
            </button>
            
            {wrongCount > 0 && (
              <button
                onClick={onRetryWrong}
                className="flex items-center justify-center px-8 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all font-semibold shadow-lg hover:shadow-xl"
              >
                <RotateCcw className="w-5 h-5 mr-2" />
                Retry Incorrect ({wrongCount})
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultView;