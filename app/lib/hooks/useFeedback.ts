import { useQuery } from "@tanstack/react-query";
import api from "../axios";

interface Feedback {
  id: number;
  name: string;
  ward: string;
  message: string;
  sentiment: "positive" | "neutral" | "negative";
  created_at: string;
}

interface FeedbackResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Feedback[];
}

export const useFeedback = (page: number = 1, sentiment?: string) => {
  return useQuery<FeedbackResponse>({
    queryKey: ["feedback", page, sentiment],
    queryFn: async () => {
      const response = await api.get("/feedback/", {
        params: {
          page,
          ...(sentiment && sentiment !== "all" && { sentiment }),
        },
      });
      return response.data;
    },
    staleTime: 1000 * 60 * 2,
  });
};