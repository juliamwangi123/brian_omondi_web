import { useQuery } from "@tanstack/react-query";
import api from "../axios";

interface NewsPost {
  id: number;
  title: string;
  slug: string;
  category: string;
  status: "published" | "draft";
  created_at: string;
  published_date: string | '';
  excerpt: string;
  content: string;
  hero_image_url: string;
}

interface NewsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: NewsPost[];
}

export const useNews = (page: number = 1, status?: string) => {
  return useQuery<NewsResponse>({
    queryKey: ["news", page, status],
    queryFn: async () => {
      const response = await api.get("/news/", {
        params: {
          page,
          ...(status && { status }),
        },
      });
      return response.data;
    },
    staleTime: 1000 * 60 * 2,
    retry: 3,
  });
};