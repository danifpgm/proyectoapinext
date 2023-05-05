import { IUsuario } from '@/interfaces';
import useSWR, { SWRConfiguration } from 'swr';


export const useUsuarios = (url: string, config: SWRConfiguration = {}) => {
    const { data, error } = useSWR<IUsuario[]>(`http://localhost:3000/api${url}`, config);
    return {
        usuarios: data || [],
        isLoading: !error && !data,
        isError: error
    }
}