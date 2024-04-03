/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useReducer } from 'react';
import { token } from '../config';

// Create a context for the current user and the dispatch function to update it
const initialState = {
    user: localStorage.getItem("user") !== undefined ? JSON.parse(localStorage.getItem("user")) : null,
    role: localStorage.getItem("role") || null,
    token: localStorage.getItem("token") || null,
};

console.log(token);

// Create a context for the current user and the dispatch function to update it
export const authContext = createContext(initialState);

// Create a reducer function to update the state based on the action type and payload received 
const authReducer = (state, action) => {
    switch (action.type) {

        case 'LOGIN_START':
            return {
                user: null,
                role: null,
                token: null,
            };
        
        case 'LOGIN_SUCCESS':
            return {
                user: action.payload.user,
                role: action.payload.role,
                token: action.payload.token,
            };
        
        case 'LOGOUT':
            return {
                user: null,
                role: null,
                token: null,
            };
        
        default:
            return state;
    }
};

// Create a context provider to provide the context to the entire app 
// eslint-disable-next-line react/prop-types
export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user));
        localStorage.setItem("role", state.role);
        localStorage.setItem("token", state.token);
    }, [state]);

    return (
        <authContext.Provider
            value={{
                user: state.user,
                role: state.role,
                token: state.token,
                dispatch,
            }}
        >
            {children}
        </authContext.Provider>
    );
}