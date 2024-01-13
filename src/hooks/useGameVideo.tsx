import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import { GameVideo } from "../entities/GameVideo";

const apiClient = new ApiClient<GameVideo>("/games");

function useGameVideo(slug: string) {
  return useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiClient.get(slug),
  });
}

export default useGameVideo;
