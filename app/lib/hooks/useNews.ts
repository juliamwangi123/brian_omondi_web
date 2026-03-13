import { useQuery } from "@tanstack/react-query"
import api from "./axios";


export const useNews = () =>{
    return useQuery({
        queryKey: ['news'],
        queryFn: async () => {
            const response = await api.get('/news/');
            return response.data;
        },
        staleTime: 1000 * 60 * 2,
    })
}