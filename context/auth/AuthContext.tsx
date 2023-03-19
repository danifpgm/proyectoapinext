import { createContext } from 'react';
import { IRespuestaApiAuth } from './interfaces/IRespuestaAuthApi';
import { IUsuario } from '@/interfaces';

interface ContextProps {
    isLoggedIn: boolean;
    usuario?: IUsuario;
    
    loginUser: (correo: string, passwd: string) => Promise<boolean>;
    registerUser: (correo: string, passwd: string, nombreCompleto: string, rol: string ) => Promise<IRespuestaApiAuth>
}

export const AuthContext  = createContext( {} as ContextProps );