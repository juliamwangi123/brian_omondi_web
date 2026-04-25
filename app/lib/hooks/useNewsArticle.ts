import { useQuery } from "@tanstack/react-query";
import api from "../axios";

interface NewsArticle {
  id: number;
  title: string;
  slug: string;
  category: string;
  status: "published" | "draft";
  created_at: string;
  published_date: string | null;
  excerpt: string;
  content: string;
  hero_image_url: string;
}

export const useNewsArticle = (slug: string) => {
  return useQuery<NewsArticle>({
    queryKey: ["news", "article", slug],
    queryFn: async () => {
      const response = await api.get("/news/", { params: { slug } });
      const article = response.data.results?.[0];
      if (!article) throw new Error("Article not found");
      return article;
    },
    enabled: !!slug,
    staleTime: 1000 * 60 * 5,
    retry: 3,
  });
};
