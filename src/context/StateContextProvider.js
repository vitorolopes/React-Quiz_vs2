import React, { createContext, useContext, useReducer } from 'react';
import reducer from './reducer'

const axios = require('axios').default;

const StateContext = createContext();

const categoriesCode = {sports: 21, history: 23, politics: 24};
const baseUrl = "https://opentdb.com/api.php?"

export const StateContextProvider = ( {children} ) => {

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
        dispatch({type: "IS_LOADING", payload: true})

        try {
            const res =  await axios.get(`${baseUrl}amount=${amount}&category=${categoryCode}&difficulty=${difficulty}&type=multiple`)
            // console.log(res.data.results);
            dispatch({type: "SET_QUESTIONS", payload: res.data.results})
        } catch (error) {
            console.log(error)
        }
        dispatch({type: "SET_SHOW_QA", payload: true})
        dispatch({type: "IS_LOADING", payload: false})
    }

    const nextQuestion = (index1, index2) => {
        dispatch({type: "SET_QUESTION_INDEX", payload: state.questionIndex + 1 })

        if(index1 === index2){
            dispatch({type: "SET_CORRECT_ANSWERS", payload: state.correctAnswers + 1})
        }

        if(state.questionIndex === state.questions.length - 1) {
            dispatch({type: "SET_SHOW_MODAL", payload: true})
        }    
    }

    const closeModal = () => { 
        dispatch({type: "SET_SHOW_MODAL", payload: false})
        dispatch({type: "SET_SHOW_QA", payload: false})
        dispatch({type: "SET_QUESTION_INDEX", payload: 0 })
        dispatch({type: "SET_CORRECT_ANSWERS", payload: 0})
    }
    
    return(
        <StateContext.Provider
            value={{  
                ...state,
                handleChange,
                handleSubmit,
                nextQuestion,
                closeModal,
            }}
        >
            { children }
        </StateContext.Provider>  
    )
}

export const useStateContext = () => useContext(StateContext)