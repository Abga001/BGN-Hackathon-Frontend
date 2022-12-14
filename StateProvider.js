import React, { createContext, useContext, useReducer } from 'react'
export const StateContext = createContext()
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)
export const useStateValue = () => useContext(StateContext)
export const initialState = {
    user: null,
}
export const actionTypes = {
    SET_USER: 'SET_USER'
}
const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user
            }
        default:
            return state
    } 
}

export default reducer