import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../axios";

interface UpdateNewsPayload {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  slug: string;
  hero_image: File | null;
  content: string;
  status: "published" | "draft";
  published_date?: string | null;
}

export const useUpdateNews = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, ...formData }: UpdateNewsPayload) => {
      const data = new FormData();
      data.append("title", formData.title);
      data.append("excerpt", formData.excerpt);
      data.append("category", formData.category);
      data.append("slug", formData.slug);
      data.append("content", formData.content);
      data.append("status", formData.status);
      if (formData.published_date) {
        data.append("published_date", formData.published_date);
      }
      if (formData.hero_image) {
        data.append("hero_image", formData.hero_image);
      }
      return api.put(`/news/${id}/`, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["news"] });
    },
  });
};