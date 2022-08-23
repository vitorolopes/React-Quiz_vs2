import React from 'react';
import Modal from './Modal';
import { useStateContext } from '../context/StateContextProvider';

const QandA = () => {

  const { questions, questionIndex, nextQuestion, showModal, correctAnswers} = useStateContext()
  
  if(showModal) return <Modal/> 

  const {question, incorrect_answers, correct_answer} = questions[questionIndex];
  let allAnswers = [...incorrect_answers, correct_answer];

// The pop() method removes (pops) the last element of an array.The pop() method changes the original array.
// The pop() method returns the removed element.   
  const item = allAnswers.pop()
  console.log(item, allAnswers)
  const index = Math.floor(Math.random() * allAnswers.length )
  allAnswers.splice(index, 0, item )
  console.log(allAnswers);
// The splice() method adds and/or removes array elements.The splice() method overwrites the original array.
// array.splice(index, howmany, item1, ....., itemX)
// "index" --> Required, the position to add/remove items. "howmany" --> Optional, number of itens to be removed
// "item1, ..., itemX" --> New elements(s) to be added. 

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
                      onClick={() => nextQuestion(index, userAnswerIndex)} //! HERE
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