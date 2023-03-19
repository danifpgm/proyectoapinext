import { useState } from 'react';
import { useRouter } from 'next/router';
import { AuthLayout } from '../../../layouts';
import proyectoApi from '../../../api/proyectoApi';
import Cookies from 'js-cookie';
import axios from 'axios';

type CriptoData = {
    nombre: string,
    precio: number,
};

const crearCriptoPage = () => { 
    const router = useRouter();
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState(0);

    const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        var precioNumero: number = +precio;

        var misCabeceros = new Headers();
        misCabeceros.append("Content-Type", "application/json");

        var cuerpo = JSON.stringify({
            "nombre": nombre,
            "precio": precioNumero
        });

        var requestOpciones = {
            method: 'POST',
            headers: misCabeceros,
            body: cuerpo,
            redirect: 'follow'
        };

        fetch("http://localhost:3000/api/cripto", requestOpciones)
            .then ( respuesta => {
                if (!respuesta.ok) {
                    console.log(Promise.reject(respuesta));
                } else {
                    console.log(respuesta.json());
                    router.replace('/admin/editarCriptos')
                }
        })
    }

    return (
        <AuthLayout title={'Crear criptomoneda'}>
            <form onSubmit={ submitForm } noValidate>
                <input
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    type="text"
                    placeholder="Nombre"
                    className="input"
                />
                <input
                    value={precio}
                    onChange={(e) => setPrecio(e.target.value)}
                    type="number"
                    placeholder="Precio"
                    className="input"
                />
                <button type="submit" className="btn">Crear</button>
            </form>
        </AuthLayout>
    )
}

export default crearCriptoPage