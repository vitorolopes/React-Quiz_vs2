import React from 'react';
import Modal from './Modal';
import { useStateContext } from '../context/StateContextProvider';

const QandA = () => {

  const { questions, questionIndex, nextQuestion, showModal, correctAnswers} = useStateContext()
  
  if(showModal) return <Modal/> 

  const {question, incorrect_answers, correct_answer} = questions[questionIndex];
  let allAnswers = [...incorrect_answers, correct_answer];
  
  const item = allAnswers.pop()
  const index = Math.floor(Math.random() * allAnswers.length )
  allAnswers.splice(index, 0, item )



  return (
    <main>
      <section className='quiz'>
        <div className="correct-answers">Correct Answers: {correctAnswers} / {questionIndex} </div>
        <article className="container"> 
          <h2  dangerouslySetInnerHTML={{__html: question}}/>

          <div>
            {allAnswers.map( (answer, userAnswerIndex) => 
              <button className="answer-btn" key={userAnswerIndex}
                      dangerouslySetInnerHTML={{__html: answer}}
                      onClick={() => nextQuestion(index, userAnswerIndex)} 
              >
                {/* {answer} */}
              </button>
            )}
            <button className='next-question-btn'
                    onClick={nextQuestion}
            >
               next question
            </button>
          </div>
        </article>

      </section>
    
    </main>
  )
}

export default QandA