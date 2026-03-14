import { useQuery } from "@tanstack/react-query";
import api from "../axios";

interface FeedbackStats {
  total: number;
  positive: number;
  neutral: number;
  negative: number;
  positive_score: number;
  active_wards: number;
}

export const useFeedbackStats = () => {
  return useQuery<FeedbackStats>({
    queryKey: ["feedback-stats"],
    queryFn: async () => {
      const response = await api.get("/feedback/stats/");
      return response.data;
    },
    staleTime: 1000 * 60 * 2,
  });
};