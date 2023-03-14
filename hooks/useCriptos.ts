import { ICripto } from '@/interfaces';
import useSWR, { SWRConfiguration } from 'swr';


export const useCriptos = (url: string, config: SWRConfiguration = {}) => {
    const { data, error } = useSWR<ICripto[]>(`http://localhost:3000/api${url}`, config);
    console.log(data);
    return {
        criptos: data || [],
        isLoading: !error && !data,
        isError: error
    }
}