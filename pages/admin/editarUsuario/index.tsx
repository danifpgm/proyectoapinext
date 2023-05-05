import { useState } from 'react';
import { useRouter } from 'next/router';
import { AdminLayout } from '@/layouts';
import styles from './editarUsuario.module.css';
import Cookies from 'js-cookie';

type UsuarioData = {
    nombre: string,
    precio: number,
};

const editarUsuarioPage = () => { 
    const router = useRouter();
    const [nombre, setNombre] = useState(Cookies.get('usuarioEditarNombre'));
    const [passwd, setPasswd] = useState('');
    const [correo, setCorreo] = useState(Cookies.get('usuarioEditarCorreo'));
    const [rol, setRol] = useState(Cookies.get('usuarioEditarRol'));
    var id = Cookies.get('usuarioEditarId')

    const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        var misCabeceros = new Headers();
        misCabeceros.append("Content-Type", "application/json");

        var cuerpo = JSON.stringify({
            correo: correo,
            passwd: passwd,
            nombreCompleto: nombre,
            esActivo: true,
            rol: rol
          });
      
        var requestOpciones = {
            method: 'PATCH',
            headers: misCabeceros,
            body: cuerpo,
            redirect: 'follow'
        };

        fetch(`http://localhost:3000/api/usuarios/${id}`, requestOpciones)
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
                    <h2 className={styles['form-header']}>Editar Usuario {id}</h2>
                    <form onSubmit={submitForm}>
                        <div className={styles['form-group']}>
                            <label htmlFor="correo">Correo</label>
                            <input type="email" id="correo" name="correo" value={correo} onChange={(e) => setCorreo(e.target.value)} required />
                        </div>
                        <div className={styles['form-group']}>
                            <label htmlFor="passwd">Contraseña</label>
                            <input type="password" id="passwd" name="contrasena" value={passwd} onChange={(e) => setPasswd(e.target.value)} required />
                        </div>
                        <div className={styles['form-group']}>
                            <label htmlFor="nombre">Nombre</label>
                            <input type="text" id="nombre" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
                        </div>
                        <div className={styles['form-group']}>
                            <label htmlFor="rol">Rol</label>
                            <select id="opciones" name="opciones" value={rol} onChange={(e) => setRol(e.target.value)} required>
                                <option value={"usuario"}>Usuario</option>
                                <option value={"administrador"}>Administrador</option>
                            </select>
                        </div>
                        <button type="submit" className={styles['form-submit']}>Actualizar</button>
                    </form>
                </div>
            </div>
        </AdminLayout>
    )
}

export default editarUsuarioPage