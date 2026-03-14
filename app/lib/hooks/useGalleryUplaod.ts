import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../axios";

interface GalleryUploadPayload {
  title: string;
  category: string;
  image: File;
}

export const useGalleryUpload = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: GalleryUploadPayload) => {
      const data = new FormData();
      data.append("title", payload.title);
      data.append("category", payload.category);
      data.append("image", payload.image);
      return api.post("/gallery/", data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["gallery"] });
    },
  });
};