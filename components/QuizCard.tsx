import React, { useState, useEffect } from 'react';
import { Question, Option, QuestionType } from '../types';
import { CheckCircle2, XCircle, ArrowRight, Languages } from 'lucide-react';

interface QuizCardProps {
  question: Question;
  onAnswer: (optionId: string, isCorrect: boolean) => void;
  onNext: () => void;
}

const QuizCard: React.FC<QuizCardProps> = ({ question, onAnswer, onNext }) => {
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showTranslation, setShowTranslation] = useState(false);

  // Reset state when question changes
  useEffect(() => {
    setSelectedOptionId(null);
    setIsSubmitted(false);
    setShowTranslation(false);
  }, [question]);

  const handleOptionClick = (option: Option) => {
    if (isSubmitted) return;

    setSelectedOptionId(option.id);
    setIsSubmitted(true);
    
    const isCorrect = option.isCorrect || false;
    onAnswer(option.id, isCorrect);

    // Auto-jump only if correct
    if (isCorrect) {
      setTimeout(() => {
        onNext();
      }, 1000);
    }
  };

  const getOptionStyles = (option: Option) => {
    const baseStyle = "w-full p-4 mb-3 text-left border rounded-lg transition-all duration-200 flex flex-col justify-center group relative";
    
    if (!isSubmitted) {
      return `${baseStyle} border-gray-200 hover:border-accent hover:bg-blue-50 hover:shadow-sm`;
    }

    // Logic for submitted state
    if (option.id === selectedOptionId) {
      if (option.isCorrect) {
        return `${baseStyle} border-green-500 bg-green-50 text-green-900 font-medium`;
      } else {
        return `${baseStyle} border-red-500 bg-red-50 text-red-900`;
      }
    }

    if (option.isCorrect && isSubmitted && selectedOptionId !== option.id) {
       // Show correct answer if user picked wrong
       return `${baseStyle} border-green-500 bg-green-50 text-green-900`;
    }

    return `${baseStyle} border-gray-200 opacity-50`;
  };

  const selectedOption = question.options.find(o => o.id === selectedOptionId);
  const isCorrect = selectedOption?.isCorrect;

  // Helper to find translation for an option
  const getOptionTranslation = (optId: string) => {
    return question.translation?.options.find(o => o.id === optId)?.text;
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden">
        {/* Question Header */}
        <div className="p-6 bg-slate-50 border-b border-slate-100">
          <div className="flex justify-between items-center mb-4">
             <span className="inline-block px-3 py-1 text-xs font-semibold text-accent bg-blue-100 rounded-full">
               {question.type === QuestionType.MCQ ? 'Multiple Choice' : 
                question.type === QuestionType.TRUE_FALSE ? 'True / False' : 'Ordering'}
             </span>
             <button 
                onClick={() => setShowTranslation(!showTranslation)}
                className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  showTranslation 
                    ? 'bg-indigo-100 text-indigo-700' 
                    : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
                }`}
             >
                <Languages className="w-4 h-4" />
                <span>{showTranslation ? 'Hide Chinese' : '翻译'}</span>
             </button>
          </div>
          
          {question.context && (
            <div className="mb-4 p-4 bg-gray-100 rounded-lg text-sm text-gray-700 whitespace-pre-line font-mono">
              {question.context}
              {showTranslation && question.translation?.context && (
                 <div className="mt-2 pt-2 border-t border-gray-200 text-indigo-800 font-sans">
                   {question.translation.context}
                 </div>
              )}
            </div>
          )}

          <h2 className="text-xl font-bold text-slate-800 leading-relaxed">
            {question.question}
          </h2>
          
          {showTranslation && question.translation && (
            <h3 className="text-lg font-medium text-indigo-700 mt-2 leading-relaxed animate-in fade-in duration-300">
              {question.translation.question}
            </h3>
          )}
        </div>

        {/* Options */}
        <div className="p-6">
          {question.options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleOptionClick(option)}
              disabled={isSubmitted}
              className={getOptionStyles(option)}
            >
              <div className="flex items-start w-full">
                <span className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full mr-4 text-sm font-bold border ${
                  isSubmitted && option.id === selectedOptionId 
                    ? (option.isCorrect ? 'border-green-500 bg-green-200 text-green-800' : 'border-red-500 bg-red-200 text-red-800')
                    : 'border-slate-200 bg-white text-slate-500 group-hover:border-accent group-hover:text-accent'
                }`}>
                  {option.id}
                </span>
                <div className="flex-1 text-left">
                  <span className="block">{option.text}</span>
                  {showTranslation && (
                    <span className="block text-indigo-600 text-sm mt-1">
                      {getOptionTranslation(option.id)}
                    </span>
                  )}
                </div>
                
                {isSubmitted && option.id === selectedOptionId && (
                  option.isCorrect ? <CheckCircle2 className="text-green-600 w-6 h-6 ml-2" /> : <XCircle className="text-red-500 w-6 h-6 ml-2" />
                )}
                 {isSubmitted && option.isCorrect && option.id !== selectedOptionId && (
                  <CheckCircle2 className="text-green-600 w-6 h-6 ml-2" />
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Feedback Section (Only shown if wrong or specifically waiting) */}
        {isSubmitted && !isCorrect && (
          <div className="px-6 pb-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div className="p-4 bg-red-50 border border-red-100 rounded-lg mb-4">
              <h3 className="text-red-800 font-semibold mb-2 flex items-center">
                 <XCircle className="w-4 h-4 mr-2" /> Incorrect
              </h3>
              <p className="text-slate-700 text-sm">
                <span className="font-bold">Explanation: </span>
                {question.explanation || "No explanation provided."}
              </p>
              {showTranslation && question.translation?.explanation && (
                 <p className="text-indigo-800 text-sm mt-2 border-t border-red-200 pt-2">
                   <span className="font-bold">解释: </span>
                   {question.translation.explanation}
                 </p>
              )}
            </div>
            <button 
              onClick={onNext}
              className="w-full py-3 bg-primary text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors flex items-center justify-center"
            >
              Next Question <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizCard;