import { useMutation } from "@tanstack/react-query";
import api from "./axios";


export const useFeedbackSubmit = () => {
    const mutation =  useMutation({
        mutationFn: (formData)  => api.post('/feedback/', formData),
        onSuccess: () => {
          return
        },

        onError: (error) => {
            throw error
        }
    }

    )

    return {
    submitFeedback: mutation.mutate,
    isPending: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,

    }

}