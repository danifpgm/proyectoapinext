import { INft } from '@/interfaces';
import useSWR, { SWRConfiguration } from 'swr';


export const useNfts = (url: string, config: SWRConfiguration = {}) => {
    const { data, error } = useSWR<INft[]>(`http://localhost:3000/api${url}`, config);
    console.log(data);
    return {
        nfts: data || [],
        isLoading: !error && !data,
        isError: error
    }
}