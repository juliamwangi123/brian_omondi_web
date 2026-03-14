import { useQuery } from "@tanstack/react-query";
import api from "../axios";

interface GalleryImage {
  id: number;
  title: string;
  image_url: string;
  category: string;
  uploaded_at: string;
}

interface GalleryResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: GalleryImage[];
}

export const useGallery = (category?: string, page: number = 1) => {
  return useQuery<GalleryResponse>({
    queryKey: ["gallery", category, page],
    queryFn: async () => {
      const response = await api.get("/gallery/", {
        params: {
          ...(category && { category }),
          page,
        },
      });
      return response.data;
    },
    staleTime: 1000 * 60 * 2,
  });
};