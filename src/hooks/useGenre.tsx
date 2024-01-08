import { useQuery } from "@tanstack/react-query";
import genre from "../data/genre";
import ApiClient from "../services/api-client";
import ms from "ms";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new ApiClient<Genre>("/genres");

const useGenre = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: () => apiClient.getAll(),
    staleTime: ms("1d"),
    initialData: genre,
  });
};
export default useGenre;
