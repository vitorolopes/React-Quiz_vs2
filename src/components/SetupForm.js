import React from 'react';
import { useStateContext } from '../context/StateContextProvider';


const SetupForm = () => {

  const {dummyValue} = useStateContext()
  console.log(dummyValue);

  return (

    <main>

      <section className='quiz quiz-small'>
        <form className='setup-form'>
           <h2>setup quiz</h2>

           <div className="form-control">
                <label htmlFor="amount">Number of questions</label>
                <input className='form-input' type="number" />
           </div> 
           <div className="form-control">
                <label htmlFor="category">category</label>
                <select className='form-input' type="number">
                    <option value="sports">sports</option>
                    <option value="history">history</option>
                    <option value="politics">politics</option>
                </select>
           </div> 
           <div className="form-control">
                <label htmlFor="difficulty">difficulty</label>
                <select className='form-input' type="number">
                    <option value="easy">easy</option>
                    <option value="medium">medium</option>
                    <option value="hard">hard</option>
                </select>
           </div> 

           <button className='submit-btn'>start</button>

        </form>
        
      </section>
      
    </main>

  )
}

export default SetupForm