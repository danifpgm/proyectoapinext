import { FC, useEffect, useReducer } from 'react';
import { AuthContext, authReducer  } from './';
import { IUsuario } from "../../interfaces/usuario/IUsuario";
import proyectoApi from '../../api/proyectoApi';
import Cookies from 'js-cookie';
import axios from 'axios';
import { IRespuestaApiAuth, IRespuestaLogin } from './interfaces/IRespuestaAuthApi';

export interface AuthState{
    isLoggedIn: boolean;
    usuario?: IUsuario;
}

const AUTH_INITIAL_STATE: AuthState = {
    isLoggedIn: false,
    usuario: undefined
}

interface Props{
    children: any
}

export const AuthProvider:FC<{children: any}> = ({ children }) => {
    const [ state, dispatch ] = useReducer( authReducer, AUTH_INITIAL_STATE );
    useEffect( ()=>{
        comprobarToken()
    }, []);

    const comprobarToken = async() => {
        //llamar al endpoint
        //Revalidar el token y guardar en cookies
        //dispatch login
        //Mal --> borrar token de las cockies
    }

    const loginUser = async (correo: string, passwd: string):Promise<boolean> => {
        try {
            const { data } = await proyectoApi.post('/usuarios/login', { correo, passwd });
            console.log('data: ', data);
            const { token, usuario } = data;
            console.log('usuario: ', usuario);
            console.log('token: ', token);
            Cookies.set('token', token);
            Cookies.set('nombreCompleto', usuario.nombreCompleto);
            dispatch({ type: '[Auth] - Login', payload: usuario });
            console.log('estado', state);
            return true;
        } catch (error) { //credenciales falsas
            return false;
        }
    } 

    const registerUser = async (correo: string, passwd: string, nombreCompleto: string ):Promise<IRespuestaApiAuth>=> {
        try {
            const { data } = await proyectoApi.post ('/usuarios/registrar', { correo, nombreCompleto, passwd })
            console.log('data: ', data);
            const { token, usuario } = data;
            console.log('usuario: ', usuario);
            console.log('token: ', token);
            Cookies.set('token', token);
            dispatch({ type: '[Auth] - Login', payload: usuario });
            console.log('estado', state);
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