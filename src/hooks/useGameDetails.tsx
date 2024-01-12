import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import { ReactNode } from "react";

interface GameDetail {
  name: string;
  description: ReactNode;
}

const apiClient = new ApiClient<GameDetail>(`/games`);
function useGameDetails(slug?: string) {
  //   const apiClient = new ApiClient<GameDetail>(`/games/${slug}`);

  return useQuery({
    queryKey: ["game_detail", slug],
    queryFn: () => apiClient.get(slug),
  });
}

export default useGameDetails;
