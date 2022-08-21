import React from 'react'

const Modal = () => {
  return (
    <section className='modal-container'>
      <div className="modal-content">
        <h2>Congrats!</h2>
        <p>You answered X % of questions correctly</p>
        <button className='close-btn'>play again</button>
      </div>
    </section>
  )
}

export default Modal