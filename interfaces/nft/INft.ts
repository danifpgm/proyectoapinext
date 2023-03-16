export interface INft {
    id:string;
    nombre: string;
    img?: string;
    precio: number;
    fechaCreacion?: string;
    creadoPorUsuario?: string;
    poseeUsuario: string;
}