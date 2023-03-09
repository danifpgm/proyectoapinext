import { IUsuario } from "../../interfaces/usuario/IUsuario";
import { AuthState } from "./";

type AuthActionType =
| { type: '[Auth] - Login', payload: IUsuario }
| { type: '[Auth] - Logout' }


export const authReducer = ( state: AuthState, action: AuthActionType ): AuthState => {
    switch (action.type){

        case '[Auth] - Login':
            return {
                ...state,
                isLoggedIn: true,
                usuario: action.payload
            }
        case '[Auth] - Logout':
            return{
                ...state,
                isLoggedIn: false,
                usuario: undefined
            }
        default:
            return state
    }
}