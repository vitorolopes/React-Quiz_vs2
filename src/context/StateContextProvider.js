import React, { createContext, useContext, useState, useReducer } from 'react';
import reducer from './reducer'

const axios = require('axios').default;

const StateContext = createContext();

const categoriesCode = {sports: 21, history: 23, politics: 24};
const baseUrl = "https://opentdb.com/api.php?"

export const StateContextProvider = ( {children} ) => {
//! HERE 1a
   // const [quiz, setQuiz] = useState({amount: 5, category: "sports", difficulty: "easy"});
//! HERE 3a
   // const [questions, setQuestions] = useState([]);
//! HERE 2a
   // const [isLoading, setIsLoading] = useState(false);
//! HERE 4a
   // const [showQandA, setShowQandA] = useState(false);
//! HERE 5a
   //  const [questionIndex, setQuestionIndex] = useState(0);
//! HERE 6a
   // const [showModal, setShowModal] = useState(false)
//! HERE 7a
   // const [correctAnswers, setCorrectAnswers] = useState(0)

//! HERE 1b
    const initialState = {
        quiz: {amount: 5, category: "sports", difficulty: "easy"},
        questions: [],
        isLoading: false,
        showQandA: false,
        questionIndex: 0,
        showModal: false,
        correctAnswers: 0
    }
    const [state, dispatch] = useReducer(reducer, initialState)

    const handleChange = (e) => { 
//! HERE 1c
        // const name = e.target.name;
        // const value = e.target.value;
        // setQuiz({...quiz, [name]: value})
        dispatch({type: "HANDLE_CHANGE", payload: {name: e.target.name, value: e.target.value}})
    }
  
    const handleSubmit = (e) => {
        e.preventDefault()
        // https://opentdb.com/api.php?amount=3&category=21&difficulty=easy&type=multiple
        // fetchQandA(url+amount+category+difficulty)
        const {amount, difficulty, category} = state.quiz
        const categoryCode = categoriesCode[category]
        fetchQuestions(amount, difficulty, categoryCode)
    }

    const fetchQuestions = async (amount, difficulty, categoryCode) => { 
//! HERE 2b1
        // setIsLoading(true)
        dispatch({type: "IS_LOADING", payload: true})

        try {
            const res =  await axios.get(`${baseUrl}amount=${amount}&category=${categoryCode}&difficulty=${difficulty}&type=multiple`)
            console.log(res.data.results);
//! HERE 3b
            // setQuestions(res.data.results)
            dispatch({type: "SET_QUESTIONS", payload: res.data.results})
        } catch (error) {
            console.log(error)
        }
//! HERE 4b
        // setShowQandA(true)
        dispatch({type: "SET_SHOW_QA", payload: true})
//! HERE 2b2
        // setIsLoading(false)
        dispatch({type: "IS_LOADING", payload: false})
    }

    const nextQuestion = (index1, index2) => {
//! HERE 5b1
        //setQuestionIndex(questionIndex + 1)
        dispatch({type: "SET_QUESTION_INDEX", payload: state.questionIndex + 1 })

        if(index1 === index2){
//! HERE 7b1
            // setCorrectAnswers(correctAnswers + 1)
            dispatch({type: "SET_CORRECT_ANSWERS", payload: state.correctAnswers + 1})
        }

        if(state.questionIndex === state.questions.length - 1) {
//! HERE 6b1
            // setShowModal(true)
            dispatch({type: "SET_SHOW_MODAL", payload: true})
        }    
    }

    const closeModal = () => { 
//! HERE 6b2 
        // setShowModal(false)
        dispatch({type: "SET_SHOW_MODAL", payload: false})
//! HERE 4c
        // setShowQandA(false)
        dispatch({type: "SET_SHOW_QA", payload: false})
//! HERE 5b2
        //setQuestionIndex(0)
        dispatch({type: "SET_QUESTION_INDEX", payload: 0 })
//! HERE 7b2
        // setCorrectAnswers(0)
        dispatch({type: "SET_CORRECT_ANSWERS", payload: 0})
    }
    
    return(
        <StateContext.Provider
            value={{  //! HERE 1c
                quiz: state.quiz,
                handleChange,
                handleSubmit,
//! HERE 2c, 3c, 4d, 5c
                isLoading: state.isLoading,
                showQandA: state.showQandA,
                questions: state.questions,
                questionIndex: state.questionIndex,

                nextQuestion,
                showModal: state.showModal,
                closeModal,
                correctAnswers: state.correctAnswers
            }}
        >
            { children }
        </StateContext.Provider>  
    )
}

export const useStateContext = () => useContext(StateContext)