import React from 'react';
import Modal from './Modal';
import Loading from './Loading';
import { useStateContext } from '../context/StateContextProvider';

const QandA = () => {

  const {isLoading, questions, questionIndex, nextQuestion, showModal} = useStateContext()
  

  // if(isLoading){
  //   return <Loading/>
  // }

  if(showModal) return <Modal/> 

  const {question, incorrect_answers, correct_answer} = questions[questionIndex];
 // console.log(incorrect_answers);
  const allAnswers = [...incorrect_answers, correct_answer];
  // console.log(allAnswers)

  return (
    <main>
      <section className='quiz'>
        <div className="correct-answers">Correct Answers: ? / ? </div>
        <article className="container"> 
          <h2>{question}</h2>

          <div>
            {allAnswers.map( answer => 
              <button className="answer-btn"
                      onClick={nextQuestion}
              >
                {answer}
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