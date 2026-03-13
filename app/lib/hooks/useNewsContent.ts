import { useMutation } from "@tanstack/react-query";
import api from "./axios";

interface newsFormData {
  title: string;
  excerpt: string;
  category: string;
  slug: string;
  hero_image: File | null;
  content: string;
  status: "published" | "draft";
}

export const useNewsContent = () => {
    return useMutation<void, Error, newsFormData>({
        mutationFn:(formData) => {
            const data = new FormData();
            data.append('title', formData.title);
            data.append('excerpt', formData.excerpt);
            data.append('category', formData.category);
            data.append('slug', formData.slug);
            if (formData.hero_image) {
                data.append('hero_image', formData.hero_image);
            }
            data.append('content', formData.content);

            return api.post('/news/', data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
        },
        onSuccess: () => {
        },
        onError: (error) => {
            console.error("Error submitting news content:", error);
            throw error
        }

    })
}
