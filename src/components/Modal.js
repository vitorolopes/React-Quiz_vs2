import React from 'react';
import { useStateContext } from '../context/StateContextProvider';

const Modal = () => {

  const {closeModal, questions, correctAnswers} = useStateContext()
  
  const percentCorrect = ((correctAnswers / questions.length) * 100).toFixed(0)

  return (
    <section className='modal-container'>
      <div className="modal-content">
        <h2>Congrats!</h2>
        <p>You answered {percentCorrect} % of questions correctly</p>
        <button className='close-btn'
                onClick={closeModal}
        >
          play again
        </button>
      </div>
    </section>
  )
}

export default Modal