import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { Platform } from "./usePlatform";
import axios, { ResponseData } from "../services/api-client";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

function useGame(gameQuery: GameQuery) {
  return useQuery({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      axios

        .get<ResponseData<Game>>("/games", {
          params: {
            genres: gameQuery?.genreObj?.id,
            parent_platforms: gameQuery?.platformObj?.id,
            ordering: gameQuery?.sorting?.label,
            search: gameQuery?.searchGame,
          },
        })
        .then((res) => {
          console.log(res);

          return res.data;
        }),
  });
}

export default useGame;
