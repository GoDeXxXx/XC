import './App.css';
import { useState } from 'react';

const questions = [
  {
    questionText: "Кого выберет Далгат ?",
    answerOptions: [
      {answerTexst: "Дашу голубеву", isCorrect: false},
      {answerTexst: "Райли Рид", isCorrect: false},
      {answerTexst: "Усатую Мадину", isCorrect: true},
      {answerTexst: "Потную армянку дырявую тетку", isCorrect: false},
    ]
  },
  {
    questionText: "Кто Порадил человечество ?",
    answerOptions: [
      {answerTexst: "Бог", isCorrect: false},
      {answerTexst: "Аллах", isCorrect: false},
      {answerTexst: "Адам и Ева", isCorrect: false},
      {answerTexst: "Женя", isCorrect: true},
    ]
  },
  {
    questionText: "Самый ужасный запах в истории мира ?",
    answerOptions: [
      {answerTexst: "H2S", isCorrect: false},
      {answerTexst: "Страусиный Максуда", isCorrect: true},
      {answerTexst: "Потный Роберта", isCorrect: false},
      {answerTexst: "Носочный антона", isCorrect: false},
    ]
  },
  {
    questionText: "Какой айфон подарят Максуду ?",
    answerOptions: [
      {answerTexst: "11", isCorrect: false},
      {answerTexst: "12", isCorrect: false},
      {answerTexst: "13", isCorrect: false},
      {answerTexst: "Его снова наебала мамаша", isCorrect: true},
    ]
  }
]


function App() {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClic = (isCorrect) => {
    if(isCorrect){
      setScore(score + 1)
    }

    const nextQuestion = currentQuestion + 1;

    if(nextQuestion < questions.length){
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
  }

  const reactions = ["😡", "😕", "😁", "🎉", "🏆"]

  const FindReaction = (score) => {
    for(let i = 0; i < questions.length + 1; i++){
      if (score == i) return reactions[i];
    }
  }

  return (
    <div className="app"> 
      {
        showScore 
        ? <div className="section_score">
            <div>Правильных ответов {score} из {questions.length} <br /> {FindReaction(score)}</div>
          </div>
        : <div className="quizz">
            <div className="question_section">
              <div className="question_count">
                <span>Вопрос {currentQuestion +  1}</span> / {questions.length}
              </div>
              <div className="question_text">{questions[currentQuestion].questionText}</div>
            </div>
            <div className="answer_section">
              {questions[currentQuestion].answerOptions.map(
                item => (
                <button 
                onClick={() => {handleAnswerOptionClic(item.isCorrect)}}
                >{item.answerTexst}</button>
              )
              )}
            </div>        
          </div>
      }
    </div>
  );
}

export default App;
