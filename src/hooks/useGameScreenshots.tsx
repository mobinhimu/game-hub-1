import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import { Screenshot } from "../entities/Screenshot";

function useGameScreenshots(slug: string) {
  const apiClient = new ApiClient<Screenshot>(`/games`);

  return useQuery({
    queryKey: ["screenshots", slug],
    queryFn: () => apiClient.get(`${slug}/screenshots`),
  });
}

export default useGameScreenshots;
