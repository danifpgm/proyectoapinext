import { createContext } from 'react';
import { IUsuario } from '../../interfaces/usuario/IUsuario';
import { IRespuestaApiAuth } from './interfaces/IRespuestaAuthApi';

interface ContextProps {
    isLoggedIn: boolean;
    user?: IUsuario;
    
    //firmas
    loginUser: (correo: string, passwd: string) => Promise<boolean>;
    registerUser: (correo: string, passwd: string, nombreCompleto: string ) => Promise<IRespuestaApiAuth>
}

export const AuthContext  = createContext( {} as ContextProps );