import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import Game from "../entities/Game";

const apiClient = new ApiClient<Game>(`/games`);

function useGameDetails(slug: string) {
  return useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiClient.get(slug),
  });
}

export default useGameDetails;
