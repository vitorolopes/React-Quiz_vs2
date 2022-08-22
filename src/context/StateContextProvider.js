import React, { createContext, useContext, useState } from 'react';

const axios = require('axios').default;

const StateContext = createContext();

const categoriesCode = {sports: 21, history: 23, politics: 24};
const baseUrl = "https://opentdb.com/api.php?"

export const StateContextProvider = ( {children} ) => {

    const [quiz, setQuiz] = useState({amount: 5, category: "sports", difficulty: "easy"});
    const [questions, setQuestions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [showQandA, setShowQandA] = useState(false)

    const handleChange = (e) => { 
        const name = e.target.name;
        const value = e.target.value;
        setQuiz({...quiz, [name]: value})
    }
  

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Oiii");
        // https://opentdb.com/api.php?amount=3&category=21&difficulty=easy&type=multiple
        // fetchQandA(url+amount+category+difficulty)
        const {amount, difficulty, category} = quiz
        const categoryCode = categoriesCode[category]
        fetchQuestions(amount, difficulty, categoryCode)
    }

    const fetchQuestions = async (amount, difficulty, categoryCode) => { 
        setIsLoading(true)
        try {
            const res =  await axios.get(`${baseUrl}amount=${amount}&category=${categoryCode}&difficulty=${difficulty}`)
            console.log(res.data.results);
            setQuestions(res.data.results)
        } catch (error) {
            console.log(error)
        }
        setIsLoading(false)
        setShowQandA(true)
     }
    
    return(
        <StateContext.Provider
            value={{
                quiz,
                handleChange,
                handleSubmit,
                isLoading,
                showQandA
            }}
        >
            { children }
        </StateContext.Provider>  
    )
}

export const useStateContext = () => useContext(StateContext)