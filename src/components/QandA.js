import React from 'react';
import Modal from './Modal'
import Loading from './Loading'

const QandA = () => {
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
    { true && <Modal/>}
    { false && <Loading/>}
    </main>
  )
}

export default QandA