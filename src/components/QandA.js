import React from 'react';
import Modal from './Modal';
import Loading from './Loading';
import { useStateContext } from '../context/StateContextProvider';

const QandA = () => {

  const {isLoading} = useStateContext()

  if(isLoading){
    return <Loading/>
  }

  return (
    <main>
      <section className='quiz'>
        <div className="correct-answers">Correct Answers: ? / ? </div>
        <article className="container"> 
          <h2>Question</h2>

          <div>
            <button className="answer-btn">Answer</button>
            <button className="answer-btn">Answer</button>
            <button className="answer-btn">Answer</button>
            <button className="answer-btn">Answer</button>

            <button className='next-question-btn'>next question</button>
          </div>
        </article>

      </section>
    { false && <Modal/>}
    </main>
  )
}

export default QandA