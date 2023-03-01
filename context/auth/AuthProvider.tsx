import { FC, useReducer } from 'react';
import { AuthContext, authReducer  } from './';
import { IUsuario } from "../../interfaces/usuario/IUsuario";
import proyectoApi from '../../api/proyectoApi';
import Cookies from 'js-cookie';
import axios from 'axios';
import { IRespuestaApiAuth } from './interfaces/IRespuestaAuthApi';
export interface AuthState{
    isLoggedIn: boolean;
    user?: IUsuario;
}
const AUTH_INITIAL_STATE: AuthState = {
    isLoggedIn: false,
    user: undefined
}

export const AuthProvider:FC = ({ children }) => {
    const [ state, dispatch ] = useReducer( authReducer, AUTH_INITIAL_STATE );
    const loginUser = async (correo: string, passwd: string):Promise<boolean> => {
        try {
            const { data } = await proyectoApi.post('/usuarios/login', { correo, passwd });
            console.log(data);
            const { token, user } = data;
            console.log(user);
            Cookies.set('token', token);
            dispatch({ type: '[Auth] - Login', payload: user });
            return true;
        } catch (error) { //credenciales falsas
            return false;
        }
    } 

    const registerUser = async (correo: string, passwd: string, nombreCompleto: string ):Promise<IRespuestaApiAuth>=> {
        try {
            const { data } = await proyectoApi.post ('/usuarios/registrar', { correo, nombreCompleto, passwd })
            const { token, user } = data;
            Cookies.set('token', token);
            dispatch({ type: '[Auth] - Login', payload: user });
            return {
                hasError: false,
                message: 'Usuario creado con éxito'
            }
        } catch (error) {
            if (axios.isAxiosError(error)){
                return {
                    hasError: true,
                    message: error.response?.data.message
                }
            }
            // no es error de axios
            return {
                hasError: true,
                message: 'No se puede crear el usuario, intentalo de nuevo'
            }
        }
    }
    return (
        <AuthContext.Provider value={{
            ...state,
            loginUser,
            registerUser
        }}>
            { children }
        </AuthContext.Provider>
    )
}