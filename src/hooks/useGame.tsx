import { keepPreviousData, useInfiniteQuery } from "@tanstack/react-query";
import ApiClient, { ResponseData } from "../services/api-client";
import useGameAction from "../store";
import Game from "../entities/Game";

const apiClient = new ApiClient<Game>("/games");

function useGame(gamePerPage?: number) {
  const gameQuery = useGameAction((store) => store.gameQuery);

  return useInfiniteQuery<ResponseData<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery?.genreId,
          parent_platforms: gameQuery?.platformId,
          ordering: gameQuery?.sortingValue,
          search: gameQuery?.searchText,
          page: pageParam,
          page_size: gamePerPage,
        },
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },

    placeholderData: keepPreviousData,
  });
}

export default useGame;
