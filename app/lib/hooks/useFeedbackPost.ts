import { useMutation } from "@tanstack/react-query";
import emailjs from "@emailjs/browser";
import api from "../axios";

const EMAILJS_SERVICE_ID  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const EMAILJS_PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

interface FeedbackFormData {
  name: string;
  ward: string;
  message: string;
}

export const useFeedbackSubmit = () => {
    const mutation = useMutation<void, Error, FeedbackFormData>({
        mutationFn: async (formData) => {
            const [apiResult, emailResult] = await Promise.allSettled([
                api.post('/feedback/', formData),
                emailjs.send(
                    EMAILJS_SERVICE_ID,
                    EMAILJS_TEMPLATE_ID,
                    {
                        from_name: formData.name,
                        ward:      formData.ward,
                        message:   formData.message,
                    },
                    EMAILJS_PUBLIC_KEY,
                ),
            ]);

            if (apiResult.status === "rejected")
                console.error("API submission failed:", apiResult.reason);
            if (emailResult.status === "rejected")
                console.error("EmailJS failed:", emailResult.reason);
        },
    });

    return {
        submitFeedback: mutation.mutate,
        isPending:      mutation.isPending,
        isSuccess:      mutation.isSuccess,
        isError:        mutation.isError,
    };
}