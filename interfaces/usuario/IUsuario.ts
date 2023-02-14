export interface IUsuario {
    id:string;
    passwd: string;
    correo: string;
    nombreCompleto: string;
    esActivo: boolean;
    roles: string[];
    creaNft?: string;
    poseeNft?: string[];
    criptos: string[];
    brokers: string[];
}
