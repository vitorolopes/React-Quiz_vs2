import React, { createContext, useContext, useState } from 'react';

const axios = require('axios').default;

const StateContext = createContext();

const categoriesCode = {sports: 21, history: 23, politics: 24};
const baseUrl = "https://opentdb.com/api.php?"

export const StateContextProvider = ( {children} ) => {

    const [quiz, setQuiz] = useState({amount: 5, category: "sports", difficulty: "easy"});
    const [questions, setQuestions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [showQandA, setShowQandA] = useState(false);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [showModal, setShowModal] = useState(false)
//! HERE
    const [correctAnswers, setCorrectAnswers] = useState(0)

    const handleChange = (e) => { 
        const name = e.target.name;
        const value = e.target.value;
        setQuiz({...quiz, [name]: value})
    }
  
    const handleSubmit = (e) => {
        e.preventDefault()
        // https://opentdb.com/api.php?amount=3&category=21&difficulty=easy&type=multiple
        // fetchQandA(url+amount+category+difficulty)
        const {amount, difficulty, category} = quiz
        const categoryCode = categoriesCode[category]
        fetchQuestions(amount, difficulty, categoryCode)
    }

    const fetchQuestions = async (amount, difficulty, categoryCode) => { 
        setIsLoading(true)
        try {
            const res =  await axios.get(`${baseUrl}amount=${amount}&category=${categoryCode}&difficulty=${difficulty}&type=multiple`)
            console.log(res.data.results);
            setQuestions(res.data.results)
        } catch (error) {
            console.log(error)
        }
        setShowQandA(true)
        setIsLoading(false)
    }

    const nextQuestion = (index1, index2) => {
        setQuestionIndex(questionIndex + 1)
//! HERE
        if(index1 === index2){
            setCorrectAnswers(correctAnswers + 1)
        }

        if(questionIndex === questions.length - 1) {
            setShowModal(true)
        }    
    }

    const closeModal = () => {  
        setShowModal(false)
        setShowQandA(false)
        setQuestionIndex(0)
        setCorrectAnswers(0)
    }
    
    return(
        <StateContext.Provider
            value={{
                quiz,
                handleChange,
                handleSubmit,
                isLoading,
                showQandA,
                questions,
                nextQuestion,
                questionIndex,
                showModal,
                closeModal,
                correctAnswers
            }}
        >
            { children }
        </StateContext.Provider>  
    )
}

export const useStateContext = () => useContext(StateContext)