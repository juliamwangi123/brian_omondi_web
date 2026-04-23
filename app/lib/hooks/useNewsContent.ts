import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import api from "../axios";

interface newsFormData {
  title: string;
  excerpt: string;
  category: string;
  slug: string;
  hero_image: File | null;
  content: string;
  status: "published" | "draft";
  published_date?: string | null;
}

export const useNewsContent = () => {
    const queryClient = useQueryClient();
    return useMutation<void, Error, newsFormData>({
        mutationFn:(formData) => {
            const data = new FormData();
            data.append('title', formData.title);
            data.append('excerpt', formData.excerpt);
            data.append('category', formData.category);
            data.append('slug', formData.slug);
            data.append('status', formData.status);
            if (formData.hero_image) {
                data.append('hero_image', formData.hero_image);
            }
            data.append('content', formData.content);
            if (formData.published_date) {
                data.append('published_date', formData.published_date);
            }

            return api.post('/news/', data);
        },
        onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["news"] });
        },
        onError: (error: unknown) => {
            const axiosErr = error as { response?: { data?: unknown } };
            console.error("Error submitting news content — validation errors:", axiosErr.response?.data);
            throw error;
        }

    })
}
