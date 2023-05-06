import React, { FC } from 'react'
import { IUsuario } from "@/interfaces"

interface Props {
    usuario: IUsuario
}

export const UsuarioDetalles:FC<Props> = ({ usuario }) => {
    console.log(usuario);
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    };

    return (
        <>
            <h2>ID: </h2>{usuario?.id}
            <h2>Nombre: </h2>{usuario?.nombreCompleto}
            <h2>Correo: </h2>{usuario?.correo}
            <h2>Rol: </h2>{usuario?.rol}
            <h2>NFTs creados: </h2>
                <ul>
                    {usuario?.creaNft?.map((dato, index) => (
                        <li key={index}>
                            Nombre: {dato.nombre}, Precio: {dato.precio}, Fecha de creación: Precio: {dato.fechaCreacion}
                        </li>
                    ))}
                </ul>
            <h2>NFTs en posesión: </h2>
                <ul>
                    {usuario?.poseeNft?.map((dato, index) => (
                        <li key={index}>
                            Nombre: {dato.nombre}, Precio: {dato.precio}, Fecha de creación: {dato.fechaCreacion}
                        </li>
                    ))}
                </ul>
            <h2>Criptos: </h2>
                <ul>
                    {usuario?.criptos?.map((dato, index) => (
                        <li key={index}>
                            Nombre: {dato.id} Cantidad: {dato.cantidad}
                        </li>
                    ))}
                </ul>
        </>
    )
}