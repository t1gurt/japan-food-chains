// src/components/tutorial/QuizComponent.tsx
'use client';

import React, { useState } from 'react';
import { QuizQuestion } from '@/types/tutorial';
import { CheckCircle, XCircle, ArrowRight, RotateCcw, ArrowLeft, Trophy, AlertCircle } from 'lucide-react';
import Link from 'next/link';

interface QuizComponentProps {
  questions: QuizQuestion[];
  onComplete: (score: number, totalQuestions: number, isPerfectScore: boolean) => void;
  lessonTitle?: string;
}

const QuizComponent: React.FC<QuizComponentProps> = ({ 
  questions, 
  onComplete, 
  lessonTitle = 'Quiz'
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [finalScore, setFinalScore] = useState(0);

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setUserAnswers([]);
    setIsQuizCompleted(false);
    setFinalScore(0);
  };

  const handleAnswer = (answerIndex: number) => {
    if (isAnswered) return;

    setSelectedAnswer(answerIndex);
    setIsAnswered(true);
    
    // Don't add the answer immediately, wait for handleNextQuestion
    console.log('Answer selected:', {
      questionIndex: currentQuestionIndex,
      answerIndex,
      currentAnswersLength: userAnswers.length,
      totalQuestions: questions.length
    });
  };

  const handleNextQuestion = () => {
    // Add current answer to the list
    const newUserAnswers = [...userAnswers, selectedAnswer!];
    setUserAnswers(newUserAnswers);
    
    console.log('Moving to next question:', {
      currentQuestionIndex,
      selectedAnswer,
      newAnswersLength: newUserAnswers.length,
      totalQuestions: questions.length
    });

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      // Calculate final score with complete list of answers
      const final = newUserAnswers.reduce((acc, answer, index) => {
        const question = questions[index];
        if (!question || typeof answer !== 'number') {
          console.error('Invalid question or answer', { question, answer, index });
          return acc;
        }
        return acc + (answer === question.correctAnswerIndex ? 1 : 0);
      }, 0);
      
      console.log('Quiz completed:', {
        finalAnswers: newUserAnswers,
        finalScore: final,
        questionsLength: questions.length
      });
      
      setFinalScore(final);
      setIsQuizCompleted(true);
      const isPerfect = final === questions.length;
      onComplete(final, questions.length, isPerfect);
    }
  };

  if (questions.length === 0) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto text-center">
        <div className="text-6xl mb-4">📚</div>
        <p className="text-gray-600">This course doesn't have a quiz available yet.</p>
        <p className="text-sm text-gray-500 mt-2">Come back soon to test your knowledge!</p>
        <Link href="/tutorial" className="mt-4 inline-flex items-center text-blue-600 hover:underline">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Dashboard
        </Link>
      </div>
    );
  }

  // Display final results
  if (isQuizCompleted) {
    const isPerfectScore = finalScore === questions.length;
    const percentage = Math.round((finalScore / questions.length) * 100);

    return (
      <div className="bg-white rounded-xl shadow-lg max-w-4xl mx-auto overflow-hidden">
        {/* Results Header */}
        <div className={`p-6 text-white ${isPerfectScore ? 'bg-gradient-to-r from-green-600 to-emerald-600' : 'bg-gradient-to-r from-orange-500 to-red-500'}`}>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Quiz Results</h2>
            <Link href="/tutorial" className="text-white hover:text-gray-200 transition-colors">
              <ArrowLeft className="w-6 h-6" />
            </Link>
          </div>
        </div>

        <div className="p-8 text-center">
          {isPerfectScore ? (
            <div className="mb-6">
              <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-green-600 mb-2">Perfect Score!</h3>
              <p className="text-lg text-gray-700 mb-4">
                Congratulations! You got {finalScore}/{questions.length} ({percentage}%)
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-center text-green-800">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="font-semibold">You unlocked a new badge!</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="mb-6">
              <AlertCircle className="w-16 h-16 text-orange-500 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-orange-600 mb-2">Almost Perfect!</h3>
              <p className="text-lg text-gray-700 mb-4">
                Score: {finalScore}/{questions.length} ({percentage}%)
              </p>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-center text-orange-800">
                  <AlertCircle className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Try again for a perfect score to unlock the badge!</span>
                </div>
              </div>
            </div>
          )}

          {/* Answer Review */}
          <div className="text-left mb-8">
            <h4 className="text-xl font-semibold mb-4">Review of your answers:</h4>
            <div className="space-y-4">
              {questions.map((question, index) => {
                // Use userAnswers directly which now contains all answers
                const userAnswer = userAnswers[index];
                
                // Safety check
                if (typeof userAnswer !== 'number' || !question) {
                  return null;
                }
                
                const isCorrect = userAnswer === question.correctAnswerIndex;
                return (
                  <div key={index} className={`p-4 rounded-lg border ${isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                    <p className="font-medium mb-2">
                      Question {index + 1}: {question.question}
                    </p>
                    <div className="text-sm">
                      <p className={`${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                        {isCorrect ? '✓' : '✗'} Your answer: {question.options[userAnswer] || 'Invalid answer'}
                      </p>
                      {!isCorrect && (
                        <p className="text-green-700 mt-1">
                          ✓ Correct answer: {question.options[question.correctAnswerIndex]}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            {!isPerfectScore && (
              <button
                onClick={resetQuiz}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center"
              >
                <RotateCcw className="w-5 h-5 mr-2" />
                Retry Quiz
              </button>
            )}
            <Link
              href="/tutorial"
              className="bg-gradient-to-r from-gray-600 to-gray-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-gray-700 hover:to-gray-800 transition-all duration-300 flex items-center"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Dashboard
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="bg-white rounded-xl shadow-lg max-w-4xl mx-auto overflow-hidden">
      {/* Header with Progress */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-2xl font-bold">{lessonTitle}</h2>
          <Link href="/tutorial" className="text-white hover:text-gray-200 transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </Link>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
          <span>{Math.round(progress)}% completed</span>
        </div>
        <div className="w-full bg-blue-400 bg-opacity-30 rounded-full h-2 mt-3">
          <div 
            className="bg-white h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question Content */}
      <div className="p-8">
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 leading-relaxed">
            {currentQuestion.question}
          </h3>
        </div>

        <div className="space-y-3">
          {currentQuestion.options.map((option: string, index: number) => {
            const isCorrect = index === currentQuestion.correctAnswerIndex;
            const isSelected = selectedAnswer === index;
            const isWrong = isAnswered && isSelected && !isCorrect;

            return (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={isAnswered}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 
                  ${!isAnswered 
                    ? 'border-gray-200 hover:border-blue-300 hover:bg-blue-50 cursor-pointer' 
                    : isCorrect 
                      ? 'border-green-500 bg-green-50 text-green-800' 
                      : isWrong 
                        ? 'border-red-500 bg-red-50 text-red-800'
                        : 'border-gray-200 bg-gray-50 text-gray-500'
                  }
                  ${isAnswered ? 'cursor-not-allowed' : ''}
                `}
              >
                <div className="flex items-center justify-between">
                  <span className="flex-1 font-medium">{option}</span>
                  {isAnswered && (
                    <div className="ml-3">
                      {isCorrect && <CheckCircle className="w-5 h-5 text-green-600" />}
                      {isWrong && <XCircle className="w-5 h-5 text-red-600" />}
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {isAnswered && (
          <div className="mt-8 text-center">
            <div className="mb-4 p-4 rounded-lg bg-gray-50">
              {selectedAnswer === currentQuestion.correctAnswerIndex ? (
                <div className="text-green-700">
                  <CheckCircle className="w-6 h-6 inline mr-2" />
                  Correct answer! Excellent work.
                </div>
              ) : (
                <div className="text-red-700">
                  <XCircle className="w-6 h-6 inline mr-2" />
                  Not quite. The correct answer was: "{currentQuestion.options[currentQuestion.correctAnswerIndex]}"
                </div>
              )}
            </div>

            <button 
              onClick={handleNextQuestion}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto"
            >
              {currentQuestionIndex < questions.length - 1 ? (
                <>
                  Next Question
                  <ArrowRight className="w-5 h-5 ml-2" />
                </>
              ) : (
                'View Results'
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizComponent;