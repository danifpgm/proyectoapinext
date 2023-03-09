
export interface IRespuestaApiAuth {
    hasError: boolean;
    message?: string;
}

export interface IUsuarioApi {
    correo: string;
    passwd: string;
    nombreCompleto: string;
    esActivo?: boolean;
    roles: string[]
}

export interface IRespuestaLogin {
    token: string;
    user: IUsuarioApi;
}