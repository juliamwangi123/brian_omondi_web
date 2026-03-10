import { useMutation } from "@tanstack/react-query";
import api from "./axios";


interface FeedbackFormData {
  name: string;
  ward: string;
  message: string;
}

export const useFeedbackSubmit = () => {
    const mutation =  useMutation<void, Error, FeedbackFormData>({
        mutationFn: (formData)  => api.post('/feedback/', formData),
        onSuccess: () => {
        },
        onError: (error) => {
            console.error("Error submitting feedback:", error);
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