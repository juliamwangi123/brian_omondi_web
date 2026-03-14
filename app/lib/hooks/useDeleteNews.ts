import { useMutation, useQueryClient } from "@tanstack/react-query"
import api from "../axios"


export const useDeleteNews  = () =>{
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: number) => api.delete(`/news/${id}/`),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["news"] });
        },
        onError: (error) => {
            console.error("Error deleting news post:", error);
            throw error
        }
    })
}