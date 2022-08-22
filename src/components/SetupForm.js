import React, {useState} from 'react';
import { useStateContext } from '../context/StateContextProvider';


const SetupForm = () => {

  const {quiz,handleChange,handleSubmit} = useStateContext()

  return (

    <main>

      <section className='quiz quiz-small'>
        <form className='setup-form'>
           <h2>setup quiz</h2>

           <div className="form-control">
                <label htmlFor="amount">Number of questions</label>
                <input className='form-input' type="number"
                       min={0} max={10}
                       name='amount'
                       value={quiz.amount}
                       onChange={handleChange}
                />
           </div> 
           <div className="form-control">
                <label htmlFor="category">category</label>
                <select className='form-input' type="number"
                        name='category'
                        value={quiz.category}
                        onChange={handleChange}
                >
                    <option value="sports">sports</option>
                    <option value="history">history</option>
                    <option value="politics">politics</option>
                </select>
           </div> 
           <div className="form-control">
                <label htmlFor="difficulty">difficulty</label>
                <select className='form-input' type="number"
                        name="difficulty"
                        value={quiz.difficulty}
                        onChange={handleChange}
                >
                    <option value="easy">easy</option>
                    <option value="medium">medium</option>
                    <option value="hard">hard</option>
                </select>
           </div> 

           <button className='submit-btn'
                   onClick={handleSubmit}
           >
              start
           </button>

        </form>
        
      </section>
      
    </main>

  )
}

export default SetupForm