import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import GameVideo from "../entities/GameVideo";

function useGameVideo(slug: string) {
  const apiClient = new ApiClient<GameVideo>(`/games`);

  return useQuery({
    queryKey: ["videos", slug],
    queryFn: () => apiClient.get(`${slug}/movies`),
  });
}

export default useGameVideo;
