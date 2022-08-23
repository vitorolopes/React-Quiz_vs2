const reducer = (prevState, action) => {
    switch(action.type){
        case "HANDLE_CHANGE": {
            const newState  = {
                ...prevState,
                // change here the property of the state we are targetting
                quiz: {
                     ...prevState.quiz,
                    [action.payload.name]: action.payload.value 
                }
            }
            return newState
        }

        case "IS_LOADING": {
            const newState = {
                ...prevState,
                isLoading: action.payload
            }
            return newState
        }

        case "SET_QUESTIONS":{
            const newState = {
                ...prevState,
                questions: action.payload
            }
            return newState
        }

        case "SET_SHOW_QA":{
            const newState = {
                ...prevState,
                showQandA: action.payload
            }
            return newState
        }

        case "SET_QUESTION_INDEX":{
            const newState = {
                ...prevState,
                questionIndex: action.payload
            }
            return newState
        }

        case "SET_SHOW_MODAL":{
            const newState = {
                ...prevState,
                showModal: action.payload
            }
            return newState
        }

        case "SET_CORRECT_ANSWERS":{
            const newState = {
                ...prevState,
                correctAnswers: action.payload
            }
            return newState
        }

        default:
            return prevState

    }
 }

 export default reducer