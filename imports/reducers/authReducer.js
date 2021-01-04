import { types } from '../types/types';

initialState = {
    loadingAuth: false,
    authError: false,
    email: "",
    name: "", 
}


export const authReducer = (state = initialState, action) => {
    switch (key) {
        case types.startLogin:
            return {
                ...state,
                loadingAuth: true,
            }
        case types.login:
            return {
                ...state,
                loadingAuth: false,
                email: action.payload.email,
                name: action.payload.name,
            }
        case types.authError: 
            return {
                ...state,
                loadingAuth: false,
                authError: true,
            }    
            
    
        default:
            return state;
    }
}
