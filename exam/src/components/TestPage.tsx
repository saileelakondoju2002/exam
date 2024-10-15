import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const TestContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const QuestionCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const OptionButton = styled.button`
  display: block;
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.5rem;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

const SubmitButton = styled.button`
  display: block;
  width: 100%;
  padding: 1rem;
  margin-top: 1rem;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
`;

interface Question {
  question: string;
  options: string[];
  answer: string;
}

const TestPage: React.FC = () => {
  const { subject } = useParams<{ subject: string }>();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds

  useEffect(() => {
    // TODO: Fetch questions from quiz.txt based on the subject
    // For now, we'll use dummy data
    const dummyQuestions: Question[] = [
      {
        question: "What is React?",
        options: ["A JavaScript library", "A programming language", "A database", "An operating system"],
        answer: "A JavaScript library"
      },
      // Add more questions here...
    ];
    setQuestions(dummyQuestions);
  }, [subject]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleAnswer = (answer: string) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestion] = answer;
    setUserAnswers(newAnswers);
  };

  const handleSubmit = () => {
    const score = userAnswers.reduce((acc, answer, index) => {
      return answer === questions[index].answer ? acc + 1 : acc;
    }, 0);
    navigate('/results', { state: { score, total: questions.length } });
  };

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <TestContainer>
      <h1>{subject} Test</h1>
      <p>Time left: {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? '0' : ''}{timeLeft % 60}</p>
      <QuestionCard>
        <h3>Question {currentQuestion + 1} of {questions.length}</h3>
        <p>{questions[currentQuestion].question}</p>
        {questions[currentQuestion].options.map((option, index) => (
          <OptionButton key={index} onClick={() => handleAnswer(option)}>
            {option}
          </OptionButton>
        ))}
      </QuestionCard>
      {currentQuestion < questions.length - 1 ? (
        <SubmitButton onClick={() => setCurrentQuestion(currentQuestion + 1)}>Next Question</SubmitButton>
      ) : (
        <SubmitButton onClick={handleSubmit}>Submit Test</SubmitButton>
      )}
    </TestContainer>
  );
};

export default TestPage;