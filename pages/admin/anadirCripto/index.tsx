import { useState } from 'react';
import { useRouter } from 'next/router';
import { AdminLayout } from '@/layouts';
import styles from './anadirCripto.module.css';

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
                    // console.log(respuesta.json());
                    console.log(respuesta);
                    router.replace('/admin')
                }
        })
    }

    return (
        <AdminLayout>
            <div className={styles['container']}>
                <div className={styles['form-container']}>
                    <h2 className={styles['form-header']}>Añadir Cripto</h2>
                    <form onSubmit={submitForm}>
                        <div className={styles['form-group']}>
                            <label htmlFor="nombre">Nombre</label>
                            <input type="text" id="nombre" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
                        </div>
                        <div className={styles['form-group']}>
                            <label htmlFor="precio">Precio</label>
                            <input type="number" id="precio" name="precio" value={precio} onChange={(e) => setPrecio(e.target.value)} required />
                        </div>
                        <button type="submit" className={styles['form-submit']}>Crear</button>
                    </form>
                </div>
            </div>
        </AdminLayout>
    )
}

export default crearCriptoPage