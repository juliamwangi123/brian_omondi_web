import { useQuery } from "@tanstack/react-query";
import api from "../axios";

export interface GalleryImage {
  id: number;
  title: string;
  image_url: string;
  video_url?: string;
  media_type?: "photo" | "video";
  category: string;
  uploaded_at: string;
}

interface GalleryResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: GalleryImage[];
}

export const useGallery = (category?: string, page: number = 1, mediaType?: string) => {
  return useQuery<GalleryResponse>({
    queryKey: ["gallery", category, page, mediaType],
    queryFn: async () => {
      const response = await api.get("/gallery/", {
        params: {
          ...(category && { category }),
          ...(mediaType && { media_type: mediaType }),
          page,
        },
      });
      return response.data;
    },
    staleTime: 1000 * 60 * 2,
    retry: 3,
  });
};