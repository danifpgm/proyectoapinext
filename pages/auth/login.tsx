import { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { useForm } from 'react-hook-form';
import { ErrorOutline } from '@mui/icons-material';
import { Box, Grid, Typography, TextField, Button, Link, Chip } from '@mui/material';
import { AuthContext} from '../../context';
import { AuthLayout } from '../../layouts';
import { validaciones } from '../../utils';
import Cookies from 'js-cookie';

interface IRespuestaLogin {
    token: string;
    correo: string;
    passwd: string;
}
type FormData = {
    correo: string,
    passwd: string,
};
const LoginPage = () => { 
    const router = useRouter();
    const { loginUser } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const [ showError, setShowError ] = useState(false);

    const onLoginUser = async ({correo, passwd}: FormData ) => {
        setShowError(false);
        const isValidLogin = await loginUser(correo, passwd);
        const rol = Cookies.get('rol');

        if (!isValidLogin){
            setShowError(true);
            setTimeout( () => setShowError(false), 3000);
            return;
        }
        //navegar a pantalla en la que estaba el usuario
        // router.push('/');

        if ( rol == 'usuario' ) {
            router.replace('/usuarios');
        }
        
        if ( rol == 'administrador') {
            router.replace('/admin');
        }
    } 
    return (
        <AuthLayout title={'Ingresar'}>
            <form onSubmit={ handleSubmit(onLoginUser) } noValidate>
                <Box sx={{ width: 350, padding: 'auto auto'}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant='h3' component='h1'>Iniciar Sesión</Typography>
                            <Chip 
                                label="No se reconoce usuario/contraseña"
                                color="error"
                                icon= {<ErrorOutline />}
                                className="fadeIn"
                                sx={{ display: showError ? 'flex': 'none'}}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField 
                                { ...register('correo', {
                                    required: 'correo es obligatorio',
                                    validate: (val) => validaciones.isEmail(val)
                                })}
                                error={!!errors.correo}
                                helperText={errors.correo?.message}
                                type="email" label="Correo" variant='filled' fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField 
                                { ...register('passwd', {
                                    required:'Contraseña es requerido',
                                    minLength: { value: 6, message: 'Minimo 6 caracteres'}
                                })}
                                error={!!errors.passwd}
                                helperText={errors.passwd?.message}
                                label="Contraseña" type="password" variant='filled' fullWidth />
                            <TextField
                                 sx={{ display: showError ? 'flex': 'none'}}
                                //  value =  {...register('token') }
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button 
                                type='submit'
                                color='success' className='circular-btn' size='large' fullWidth>
                                Ingresar
                            </Button>                           
                        </Grid>
                        <Grid item xs={12} display='flex' justifyContent='end'>
                            <Link href='/auth/register' passHref component={NextLink} underline='always'>
                                ¿ No tienes cuenta ... ?
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </form>
        </AuthLayout>
    )
}

export default LoginPage