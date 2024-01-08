import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { Platform } from "./usePlatform";
import ApiClient from "../services/api-client";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const apiClient = new ApiClient<Game>("/games");

function useGame(gameQuery: GameQuery) {
  return useQuery({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery?.genreObj?.id,
          parent_platforms: gameQuery?.platformObj?.id,
          ordering: gameQuery?.sorting?.label,
          search: gameQuery?.searchGame,
        },
      }),
  });
}

export default useGame;
