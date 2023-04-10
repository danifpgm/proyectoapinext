import { Email, ErrorOutline, ErrorSharp } from '@mui/icons-material';
import { Box, Grid, Typography, TextField, Button, Link, Chip, MenuItem, InputLabel } from '@mui/material';
import NextLink from 'next/link';
import { useState, useContext } from 'react';
import Select from "@mui/material/Select";
import { useForm } from 'react-hook-form';
import { AuthLayout } from '../../layouts';
import { validaciones } from '../../utils';
import { useRouter } from 'next/router';
import { AuthContext } from '../../context/auth/AuthContext';
import React from 'react';

interface IRespuestaRegister {
    token: string;
    correo: string;
    passwd: string;
    nombreCompleto: string;
    esActivo: boolean;
    rol: String
}
type UserData = {
    correo: string,
    passwd: string,
    nombreCompleto: string,
    rol: string
};
const RegisterPage = () => {
    const router = useRouter();
    const { registerUser } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm<UserData>();
    const [ showError, setShowError ] = useState(false);
    const [ errorMessage, setErrorMessage ] = useState('');

    const [rol, setRol] = React.useState("usuario");
  
    const handleChange = (evento) => {
        setRol(evento.target.value);
    };
  
    const onRegisterUser = async ( InputData: UserData ) => {
    setShowError(false);
    const { correo, passwd, nombreCompleto, rol} = InputData;
    const { hasError, message } = await registerUser(correo, passwd, nombreCompleto, rol)
    if (hasError){
        setShowError(true);
        setErrorMessage(message || '');
        setTimeout( () => setShowError(false), 3000);
        return;
    }

    if ( rol == 'usuario' ) {
        router.replace('/usuarios');
    }
    
    if ( rol == 'administrador') {
        router.replace('/admin');
    }

    }

    return (
    <AuthLayout title={'Ingresar'}>
        <form onSubmit={ handleSubmit(onRegisterUser)} noValidate>
        <Box sx={{ width: 350, padding: '10px 20px'}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant='h3' component='h1'>Crear Cuenta</Typography>
                    <Chip 
                                label="Error al intentar crear la cuenta"
                                color="error"
                                icon= {<ErrorOutline />}
                                className="fadeIn"
                                sx={{ display: showError ? 'flex': 'none'}}
                            />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        { ...register('nombreCompleto', {
                            required: 'Nombre y Apellidos obligatorio'
                        })}
                        error= { !!errors.nombreCompleto}
                        helperText = { errors.nombreCompleto?.message }
                        label="Nombre y Apellidos" variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        { ...register('correo', {
                            required: 'Correo obligatorio',
                            validate: validaciones.isEmail
                        })}
                        error= { !!errors.correo}
                        helperText = { errors.correo?.message }
                        label="Correo" variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        { ...register('passwd', {
                            required: 'Password requerido',
                            minLength: { value:6, message: 'Minimo 6 caracteres'}
                        })}
                        error= { !!errors.passwd}
                        helperText = { errors.passwd?.message }
                        label="Contraseña" type="password" variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12}>
                <InputLabel id="demo-simple-select-label">
                        Rol:
                </InputLabel>
                <Select
                    { ...register('rol', {
                        required: 'Rol requerido'
                    })}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={rol}
                    label="Rol"
                    onChange={handleChange}
                >
                    <MenuItem value={'usuario'}>usuario</MenuItem>
                    <MenuItem value={'administrador'}>administrador</MenuItem>
                </Select>
                </Grid>
                <Grid item xs={12}>
                    <Button 
                        type="submit" color='success' className='circular-btn' size='large' fullWidth>
                        Ingresar
                    </Button>
                </Grid>
                <Grid item xs={12} display='flex' justifyContent='end'>
                    <Link href='/auth/login' passHref component={NextLink} underline='always'>
                        ¿ Ya tienes una cuenta ... ?
                    </Link>
                </Grid>
            </Grid>
        </Box>
        </form>
    </AuthLayout>
    )
    }

export default RegisterPage