import React, { useState } from 'react';
import { questions } from './questions';
import QuizCard from './components/QuizCard';
import ResultView from './components/ResultView';
import { QuizState, Question } from './types';
import { BookOpen } from 'lucide-react';

const App: React.FC = () => {
  // We keep a separate state for the subset of questions currently being played
  const [activeQuestions, setActiveQuestions] = useState<Question[]>(questions);
  
  const [gameState, setGameState] = useState<QuizState>({
    currentQuestionIndex: 0,
    score: 0,
    answers: [],
    isFinished: false,
    hasStarted: false
  });

  const handleStart = () => {
    setActiveQuestions(questions); // Start with all questions
    setGameState({
      currentQuestionIndex: 0,
      score: 0,
      answers: [],
      isFinished: false,
      hasStarted: true
    });
  };

  const handleAnswer = (optionId: string, isCorrect: boolean) => {
    setGameState(prev => ({
      ...prev,
      score: isCorrect ? prev.score + 1 : prev.score,
      answers: [
        ...prev.answers,
        {
          questionId: activeQuestions[prev.currentQuestionIndex].id,
          isCorrect,
          selectedId: optionId
        }
      ]
    }));
  };

  const handleNext = () => {
    if (gameState.currentQuestionIndex < activeQuestions.length - 1) {
      setGameState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1
      }));
    } else {
      setGameState(prev => ({
        ...prev,
        isFinished: true
      }));
    }
  };

  const handleRestart = () => {
    // Reset to full quiz
    setActiveQuestions(questions);
    setGameState({
      currentQuestionIndex: 0,
      score: 0,
      answers: [],
      isFinished: false,
      hasStarted: false
    });
  };

  const handleRetryWrong = () => {
    // Identify wrong answers from the current finished session
    const wrongIds = gameState.answers
      .filter(a => !a.isCorrect)
      .map(a => a.questionId);
    
    const wrongQuestions = questions.filter(q => wrongIds.includes(q.id));

    if (wrongQuestions.length > 0) {
      setActiveQuestions(wrongQuestions);
      setGameState({
        currentQuestionIndex: 0,
        score: 0,
        answers: [],
        isFinished: false,
        hasStarted: true
      });
    }
  };

  if (!gameState.hasStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center animate-in zoom-in duration-500">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-10 h-10 text-accent" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-3">SciWrite Quiz</h1>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Test your knowledge on scientific writing workflows, ethics, abstract structure, and more. 
            Contains {questions.length} questions from the course material.
          </p>
          <button
            onClick={handleStart}
            className="w-full py-4 bg-accent hover:bg-blue-600 text-white font-bold rounded-xl shadow-lg transition-all transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Start Quiz
          </button>
        </div>
      </div>
    );
  }

  if (gameState.isFinished) {
    return (
      <div className="min-h-screen bg-slate-50 py-10">
         <ResultView 
            score={gameState.score} 
            total={activeQuestions.length} 
            answers={gameState.answers}
            questions={activeQuestions}
            onRestart={handleRestart}
            onRetryWrong={handleRetryWrong}
         />
      </div>
    );
  }

  const currentQ = activeQuestions[gameState.currentQuestionIndex];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center py-8 px-4">
      {/* Header / Progress */}
      <div className="w-full max-w-2xl mb-6">
        <div className="flex justify-between items-center mb-2 text-sm font-medium text-slate-500">
          <span>Question {gameState.currentQuestionIndex + 1} of {activeQuestions.length}</span>
          <span>Score: {gameState.score}</span>
        </div>
        <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-accent transition-all duration-500 ease-out"
            style={{ width: `${((gameState.currentQuestionIndex + 1) / activeQuestions.length) * 100}%` }}
          />
        </div>
      </div>

      <QuizCard 
        question={currentQ}
        onAnswer={handleAnswer}
        onNext={handleNext}
      />
    </div>
  );
};

export default App;