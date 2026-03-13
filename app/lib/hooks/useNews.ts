import { useQuery } from "@tanstack/react-query";
import api from "./axios";

interface NewsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    id: number;
    title: string;
    slug: string;
    category: string;
    status: "published" | "draft";
    created_at: string;
  }[];
}

export const useNews = (page: number = 1) => {
  return useQuery<NewsResponse>({
    queryKey: ["news", page],
    queryFn: async () => {
      const response = await api.get("/news/", { params: { page } });
      return response.data;
    },
    staleTime: 1000 * 60 * 2,
  });
};