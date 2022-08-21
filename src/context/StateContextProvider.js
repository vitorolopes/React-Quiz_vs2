import React, { createContext, useContext } from 'react';

const StateContext = createContext();

export const StateContextProvider = ( {children} ) => {

    const dummyValue = "This is a dummy value"
    
    return(
        <StateContext.Provider
            value={{
                dummyValue
            }}
        >
            { children }
        </StateContext.Provider>  
    )
}

export const useStateContext = () => useContext(StateContext)