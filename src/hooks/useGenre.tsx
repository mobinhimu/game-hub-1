import { useQuery } from "@tanstack/react-query";
import genre from "../data/genre";
import ApiClient from "../services/api-client";

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
    staleTime: 1 * 24 * 60 * 60 * 1000,
    initialData: genre,
  });
};
export default useGenre;
